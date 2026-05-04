'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import NewsCard from '../components/NewsCard';
import './news.css';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { t, language } = useLanguage();

  useEffect(() => {
    const loadNews = async () => {
      try {
        // Try to load language-specific version first
        let response;
        if (language !== 'en') {
          response = await fetch(`/data/news-${language}.json`);
          if (!response.ok) {
            response = await fetch('/data/news.json');
          }
        } else {
          response = await fetch('/data/news.json');
        }

        const data = await response.json();
        setNews(data.news);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load news data:', error);
        setLoading(false);
      }
    };

    loadNews();
  }, [language]);

  if (loading) {
    return <div className="page-shell"><p>{t('page.news.loading')}</p></div>;
  }

  const categories = ['All', ...new Set(news.map((item) => item.category))];
  const filteredNews = selectedCategory === 'All'
    ? news
    : news.filter((item) => item.category === selectedCategory);

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('page.news.eyebrow')}</span>
        <h1>{t('page.news.title')}</h1>
        <p>{t('page.news.description')}</p>
      </header>

      <div className="news-filters">
        <div className="filter-group">
          <span className="filter-label">{t('page.news.filter-label')}</span>
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

      <div className="news-list">
        {filteredNews.length > 0 ? (
          filteredNews.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))
        ) : (
          <div className="no-results">
            <p>No news items found for the selected category.</p>
          </div>
        )}
      </div>

      <section className="news-footer">
        <div className="panel">
          <h2>More Information</h2>
          <p>
            For more detailed information about game systems and features, check out our comprehensive wiki.
          </p>
          <div className="footer-links">
            <a href="/server-info" className="button-secondary">Server Info</a>
            <a href="/features" className="button-secondary">Game Features</a>
            <a href="/gallery" className="button-secondary">Gallery</a>
            <a href="https://discord.com/invite/Y52aMdpM5A" target="_blank" rel="noreferrer" className="button-secondary">
              Discord Community
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
