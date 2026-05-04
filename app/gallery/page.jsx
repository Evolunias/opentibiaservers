'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import GalleryGrid from '../components/GalleryGrid';
import './gallery.css';

export default function GalleryPage() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const loadGallery = async () => {
      try {
        // Try to load language-specific version first
        let response;
        if (language !== 'en') {
          response = await fetch(`/data/gallery-${language}.json`);
          if (!response.ok) {
            response = await fetch('/data/gallery.json');
          }
        } else {
          response = await fetch('/data/gallery.json');
        }

        const data = await response.json();
        setGalleries(data.galleries);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load gallery data:', error);
        setLoading(false);
      }
    };

    loadGallery();
  }, [language]);

  if (loading) {
    return <div className="page-shell"><p>{t('page.gallery.loading')}</p></div>;
  }

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('page.gallery.eyebrow')}</span>
        <h1>{t('page.gallery.title')}</h1>
        <p>{t('page.gallery.description')}</p>
      </header>

      <div className="gallery-section">
        {galleries.map((gallery) => (
          <section key={gallery.id} className="gallery-container">
            <GalleryGrid
              items={gallery.items}
              title={gallery.title}
              description={gallery.description}
            />
          </section>
        ))}
      </div>
    </main>
  );
}
