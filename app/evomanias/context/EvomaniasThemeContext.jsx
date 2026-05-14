'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const EvomaniasThemeContext = createContext();

export function EvomaniasThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('evomanias-theme') || 'dark';
    setTheme(savedTheme);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('evomanias-theme', newTheme);
  };

  return (
    <EvomaniasThemeContext.Provider value={{ theme, toggleTheme, isMounted }}>
      {children}
    </EvomaniasThemeContext.Provider>
  );
}

export function useEvomaniasTheme() {
  const context = useContext(EvomaniasThemeContext);
  if (!context) {
    throw new Error('useEvomaniasTheme must be used within EvomaniasThemeProvider');
  }
  return context;
}
