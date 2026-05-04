'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_LANGUAGE } from '@/app/lib/languages';
import { translate } from '@/app/lib/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get language from localStorage or use default
    const savedLanguage = localStorage.getItem('language') || DEFAULT_LANGUAGE;
    setLanguage(savedLanguage);
    
    // Update HTML lang attribute
    updateHtmlLang(savedLanguage);
  }, []);

  const updateHtmlLang = (lang) => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', lang);
    // Set text direction for RTL languages (Arabic)
    if (lang === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
    }
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    updateHtmlLang(newLanguage);
  };

  const t = (key) => translate(key, language);

  if (!mounted) {
    return children;
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  // Return a safe default value for SSR/hydration issues
  if (!context) {
    return {
      language: DEFAULT_LANGUAGE,
      changeLanguage: () => {},
      t: (key) => translate(key, DEFAULT_LANGUAGE),
      mounted: false,
    };
  }
  return context;
}
