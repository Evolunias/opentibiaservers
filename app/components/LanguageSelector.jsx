'use client';

import { useEffect, useMemo, useState } from 'react';

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'pt', label: 'Portugu\u00eas', short: 'PT' },
  { code: 'pl', label: 'Polski', short: 'PL' },
  { code: 'es', label: 'Espa\u00f1ol', short: 'ES' },
  { code: 'sv', label: 'Svenska', short: 'SV' },
  { code: 'tr', label: 'T\u00fcrk\u00e7e', short: 'TR' },
  { code: 'fr', label: 'Fran\u00e7ais', short: 'FR' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'nl', label: 'Nederlands', short: 'NL' },
];

const googleTranslateElementId = 'google_translate_element';

function setCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
}

function clearTranslateCookie() {
  document.cookie = 'googtrans=;path=/;max-age=0;SameSite=Lax';
  document.cookie = 'googtrans=;path=/;domain=.opentibiaservers.com;max-age=0;SameSite=Lax';
  document.cookie = 'googtrans=;path=/;domain=opentibiaservers.com;max-age=0;SameSite=Lax';
}

function applyTranslation(languageCode) {
  if (languageCode === 'en') {
    clearTranslateCookie();
    window.location.reload();
    return;
  }

  setCookie('googtrans', `/en/${languageCode}`);

  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = languageCode;
    select.dispatchEvent(new Event('change'));
    return;
  }

  window.location.reload();
}

function readSavedLanguage(labelByCode) {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([^;]+)/);
  if (match?.[1] && labelByCode.has(match[1])) return match[1];
  return 'en';
}

export default function LanguageSelector() {
  const [language, setLanguage] = useState('en');
  const labelByCode = useMemo(
    () => new Map(languages.map((item) => [item.code, item.label])),
    [],
  );

  useEffect(() => {
    setLanguage(readSavedLanguage(labelByCode));

    const scrubGoogleChrome = () => {
      document
        .querySelectorAll(
          '.goog-te-banner-frame, .goog-te-balloon-frame, iframe.goog-te-banner-frame, body > .skiptranslate, #goog-gt-tt, .VIpgJd-ZVi9od-ORHb-OEVmcd',
        )
        .forEach((node) => {
          if (node.id === googleTranslateElementId) return;
          if (node.closest?.('.language-selector')) return;
          node.remove();
        });
      document.body.style.top = '0px';
      document.documentElement.style.marginTop = '0px';
    };

    scrubGoogleChrome();
    const chromeObserver = new MutationObserver(scrubGoogleChrome);
    chromeObserver.observe(document.documentElement, { childList: true, subtree: true });

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      const host = document.getElementById(googleTranslateElementId);
      if (host) host.innerHTML = '';
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: languages.map((item) => item.code).join(','),
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE,
        },
        googleTranslateElementId,
      );
    };

    if (!document.querySelector('script[data-ots-translate="true"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.dataset.otsTranslate = 'true';
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
      return () => chromeObserver.disconnect();
  }, [labelByCode]);

  const handleChange = (event) => {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);
    applyTranslation(nextLanguage);
  };

  const current = languages.find((item) => item.code === language) || languages[0];

  return (
    <div className="language-selector" data-lang={language}>
      <label htmlFor="language-selector" className="sr-only">
        Language
      </label>
      <span className="language-selector__glyph" aria-hidden="true">
        Aa
      </span>
      <select
        id="language-selector"
        value={language}
        onChange={handleChange}
        className="language-selector__select"
        aria-label="Site language"
        title={current.label}
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.short} - {item.label}
          </option>
        ))}
      </select>
      <div
        id={googleTranslateElementId}
        className="language-selector__widget skiptranslate"
        aria-hidden="true"
      />
    </div>
  );
}