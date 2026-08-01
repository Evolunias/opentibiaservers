'use client';

import { useEffect, useMemo, useState } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'pl', label: 'Polski' },
  { code: 'es', label: 'Español' },
  { code: 'sv', label: 'Svenska' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'nl', label: 'Nederlands' },
];

const googleTranslateElementId = 'google_translate_element';

function setCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
}

function clearTranslateCookie() {
  document.cookie = 'googtrans=;path=/;max-age=0;SameSite=Lax';
  document.cookie = 'googtrans=;path=/;domain=.opentibiaservers.com;max-age=0;SameSite=Lax';
}

function applyTranslation(languageCode) {
  if (languageCode === 'en') {
    clearTranslateCookie();
    window.location.reload();
    return;
  }

  const value = `/en/${languageCode}`;
  setCookie('googtrans', value);

  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = languageCode;
    select.dispatchEvent(new Event('change'));
    return;
  }

  window.location.reload();
}

export default function LanguageSelector() {
  const [language, setLanguage] = useState('en');
  const labelByCode = useMemo(() => new Map(languages.map((item) => [item.code, item.label])), []);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: languages.map((item) => item.code).join(','),
          autoDisplay: false,
        },
        googleTranslateElementId,
      );
    };

    if (!document.querySelector('script[data-ots-translate="true"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.dataset.otsTranslate = 'true';
      document.body.appendChild(script);
    }

    const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([^;]+)/);
    if (match?.[1] && labelByCode.has(match[1])) {
      setLanguage(match[1]);
    }
  }, [labelByCode]);

  const handleChange = (event) => {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);
    applyTranslation(nextLanguage);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-selector" className="sr-only">Language</label>
      <select
        id="language-selector"
        value={language}
        onChange={handleChange}
        className="language-selector__select"
        aria-label="Translate site language"
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
      <div id={googleTranslateElementId} className="language-selector__widget" aria-hidden="true" />
    </div>
  );
}
