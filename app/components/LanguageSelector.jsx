'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import { LANGUAGES, getLanguageByCode } from '@/app/lib/languages';
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import './LanguageSelector.css';

function LanguageSelectorContent() {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLanguage = getLanguageByCode(language);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-wrapper" ref={dropdownRef}>
      <button
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        title={t('nav.change-language')}
        aria-label={t('nav.change-language')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" />
        <span className="language-selector-flag">{currentLanguage.flag}</span>
        <span className="language-selector-text">
          <span className="language-name">{currentLanguage.name}</span>
          <span className="country-name">{currentLanguage.country}</span>
        </span>
      </button>

      {isOpen && (
        <div className="language-selector-dropdown" role="listbox">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              role="option"
              aria-selected={language === lang.code}
            >
              <span className="language-flag">{lang.flag}</span>
              <div className="language-info">
                <span className="language-name">{lang.name}</span>
                <span className="country-name">{lang.country}</span>
              </div>
              {language === lang.code && (
                <span className="checkmark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function LanguageSelector() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="language-selector-button"
        disabled
        style={{ opacity: 0.5 }}
        aria-label={t('nav.loading-language')}
      >
        <Globe className="h-4 w-4" />
      </button>
    );
  }

  return <LanguageSelectorContent />;
}
