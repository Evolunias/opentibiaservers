'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { translate } from '@/app/lib/translations';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const themeName = translate(`theme.${nextTheme}`, language);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch to ${themeName} theme`}
      aria-label={`Switch to ${themeName} theme`}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="theme-toggle-text">{themeName}</span>
    </button>
  );
}
