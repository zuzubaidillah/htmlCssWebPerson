let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
}else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        setTheme(mode)
        console.log('Options: ', mode)
    })
}

// MERUBAH ATTRIBUTE
// document.getElementById('btn-iya').setAttribute('onclick',"hapus('"+id+"')")

function setTheme(mode) {
    if (mode=='light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode=='blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode=='green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode=='purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)

}