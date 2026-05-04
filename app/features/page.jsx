'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import FeatureCard from '../components/FeatureCard';
import './features.css';

export default function FeaturesPage() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { t, language } = useLanguage();

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        // Try to load language-specific version first
        let response;
        if (language !== 'en') {
          response = await fetch(`/data/features-${language}.json`);
          if (!response.ok) {
            response = await fetch('/data/features.json');
          }
        } else {
          response = await fetch('/data/features.json');
        }

        const data = await response.json();
        setFeatures(data.features);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load features data:', error);
        setLoading(false);
      }
    };

    loadFeatures();
  }, [language]);

  if (loading) {
    return <div className="page-shell"><p>{t('page.features.loading')}</p></div>;
  }

  const categories = ['All', ...new Set(features.map((item) => item.category))];
  const filteredFeatures = selectedCategory === 'All'
    ? features
    : features.filter((item) => item.category === selectedCategory);

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('page.features.eyebrow')}</span>
        <h1>{t('page.features.title')}</h1>
        <p>{t('page.features.description')}</p>
      </header>

      <div className="features-filters">
        <div className="filter-group">
          <span className="filter-label">{t('page.features.filter-label')}</span>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="features-grid">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))
        ) : (
          <div className="no-results">
            <p>{t('page.features.no-results')}</p>
          </div>
        )}
      </div>

      <section className="features-footer">
        <div className="panel">
          <h2>{t('page.features.footer-title')}</h2>
          <p>{t('page.features.footer-description')}</p>
          <div className="footer-links">
            <a href="/gallery" className="button-secondary">{t('page.features.button-gallery')}</a>
            <a href="/news" className="button-secondary">{t('page.features.button-news')}</a>
            <a href="/server-info" className="button-secondary">{t('page.features.button-server')}</a>
            <a href="https://evolisca.com" target="_blank" rel="noreferrer" className="button-secondary">
              {t('page.features.button-official')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
