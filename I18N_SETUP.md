# Internationalization (i18n) Setup Guide

This project now includes multi-language support with language selection and global settings. The system supports 7 languages: English, Polish, Portuguese, Spanish, Swedish, Arabic, and Finnish.

## Features

✨ **Multi-Language Support**
- 7 languages supported: English 🇺🇸, Polish 🇵🇱, Portuguese 🇵🇹, Spanish 🇪🇸, Swedish 🇸🇪, Arabic 🇸🇦, Finnish 🇫🇮
- Each language includes country flag and name
- Language preference persisted to localStorage
- HTML `lang` attribute and `dir` attribute dynamically updated
- RTL support for Arabic

🎯 **Language Selection**
- Dropdown selector in header with flags and country names
- Shows current language with flag and country
- Dropdown with all available language options
- Active language indicated with checkmark
- Smooth animations and dark mode support
- Mobile responsive

## File Structure

```
app/
├── context/
│   └── LanguageContext.jsx       # Language provider and hook
├── components/
│   ├── LanguageSelector.jsx       # Language dropdown component
│   └── LanguageSelector.css       # Styles for selector
├── hooks/
│   └── useTranslate.js            # Helper hook for translations
└── lib/
    ├── languages.js               # Language configuration
    └── translations.js            # Translation strings
```

## Usage

### 1. Using Translations in Components

```jsx
'use client';

import { useTranslate } from '@/app/hooks/useTranslate';

export default function MyComponent() {
  const t = useTranslate();

  return (
    <div>
      <h1>{t('nav.search')}</h1>
      <p>{t('settings.title')}</p>
    </div>
  );
}
```

### 2. Using Language Context Directly

```jsx
'use client';

import { useLanguage } from '@/app/context/LanguageContext';

export default function LanguageInfo() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => changeLanguage('pl')}>
        Switch to Polish
      </button>
      <p>{t('settings.language')}</p>
    </div>
  );
}
```

## Adding New Translations

To add new translation keys:

1. **Open `app/lib/translations.js`**
2. **Add your key to all language objects:**

```javascript
export const TRANSLATIONS = {
  en: {
    'your.new.key': 'Your text in English',
    ...
  },
  pl: {
    'your.new.key': 'Twój tekst po polsku',
    ...
  },
  pt: {
    'your.new.key': 'Seu texto em português',
    ...
  },
  // ... add for all languages
};
```

3. **Use in your component:**

```jsx
const t = useTranslate();
return <span>{t('your.new.key')}</span>;
```

## Adding New Languages

To add a new language:

1. **Add language configuration in `app/lib/languages.js`:**

```javascript
{
  code: 'de',
  name: 'German',
  country: 'Germany',
  flag: '🇩🇪',
  htmlLang: 'de',
}
```

2. **Add translations in `app/lib/translations.js`:**

```javascript
de: {
  'nav.search': 'Suche',
  'settings.title': 'Globale Einstellungen',
  // ... add all keys
}
```

## Language Configuration

### Available Languages

Each language has:
- `code`: Language code (e.g., 'en', 'pl', 'es')
- `name`: Display name (e.g., 'English', 'Polish')
- `country`: Associated country (e.g., 'United States', 'Poland')
- `flag`: Country emoji flag 🚩
- `htmlLang`: HTML lang attribute value

### Default Language

The default language is English (`en`). If a translation key is missing for a specific language, it falls back to English.

## Features in Detail

### Language Persistence

- Language preference is saved to `localStorage` with key `'language'`
- On page load, the saved language is automatically loaded
- If no language is saved, defaults to English

### HTML Attributes

The system automatically updates:
- **`lang` attribute**: Set to the language code (e.g., `lang="pl"` for Polish)
- **`dir` attribute**: Set to `'rtl'` for Arabic, `'ltr'` for all others

This ensures proper text direction and accessibility.

### Responsive Design

The language selector button:
- Shows full language name and country on desktop
- Shows only flag icon on mobile (≤640px)
- Dropdown positions correctly in all screen sizes

### Dark Mode Support

The language selector adapts to the theme:
- Light mode: White background with dark text
- Dark mode: Dark background with light text
- Uses CSS variables for seamless integration

## Translation Keys Reference

Current translation keys available:

```javascript
'nav.search'
'nav.evolisca'
'settings.title'
'settings.language'
'settings.language-selection'
'footer.description'
'equipment.melee'
'equipment.distance'
'equipment.wands-rods'
'equipment.backpacks'
'equipment.helmets'
'equipment.armors'
'equipment.legs'
'equipment.boots'
'equipment.amulets'
'equipment.rings'
'equipment.ammo-slot'
'equipment.charms'
```

Add more as needed by updating `app/lib/translations.js`.

## Best Practices

1. **Use consistent key naming**: Follow the pattern `domain.feature.item`
   - Examples: `nav.search`, `settings.language`, `equipment.melee`

2. **Organize by section**: Group related translations together
   - Navigation keys: `nav.*`
   - Settings keys: `settings.*`
   - Equipment keys: `equipment.*`

3. **Keep translations synchronized**: When adding a new key, add it to ALL language objects to prevent fallback to English

4. **Test in multiple languages**: Always test new features with at least 2-3 languages to catch missing translations

5. **Consider RTL languages**: Arabic is RTL; test UI layouts with Arabic text

## Troubleshooting

### Language Selector Not Showing

- Ensure `LanguageProvider` wraps your layout
- Check browser console for errors
- Verify localStorage is enabled

### Translations Not Updating

- Check that the key exists in all language objects in `translations.js`
- Ensure you're using `useTranslate()` or `useLanguage()` in a client component (`'use client'`)
- Clear browser cache and localStorage: `localStorage.clear()`

### Fallback to English

- If a translation key is missing in a language, it automatically falls back to English
- Check `app/lib/translations.js` for missing keys

## Browser Compatibility

- Requires modern browsers with localStorage support
- Tested with: Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers fully supported

## Performance

- Minimal bundle size impact (translations are inline)
- No external API calls for translations
- localStorage caching for instant language switching
- CSS-in-JS for styling with automatic dark mode support
