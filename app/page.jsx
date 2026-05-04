'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import {
  Wand2,
  Search,
  Shield,
  Sword,
  Trophy,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import FeaturedItems from "./components/FeaturedItems";
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const categoryCards = [
    {
      key: 'news',
      title: t('category.news'),
      icon: Wand2,
      summary: t('category.news-summary'),
      links: t('category.news-links').split(',').map(s => s.trim()),
      href: "/news",
    },
    {
      key: 'features',
      title: t('category.features'),
      icon: Sparkles,
      summary: t('category.features-summary'),
      links: t('category.features-links').split(',').map(s => s.trim()),
      href: "/features",
    },
    {
      key: 'gallery',
      title: t('category.gallery'),
      icon: Shield,
      summary: t('category.gallery-summary'),
      links: t('category.gallery-links').split(',').map(s => s.trim()),
      href: "/gallery",
    },
    {
      key: 'items',
      title: t('category.items'),
      icon: Shield,
      summary: t('category.items-summary'),
      links: t('category.items-links').split(',').map(s => s.trim()),
      href: "/items",
    },
    {
      key: 'spells',
      title: t('category.spells'),
      icon: Wand2,
      summary: t('category.spells-summary'),
      links: t('category.spells-links').split(',').map(s => s.trim()),
      href: "/spells",
    },
    {
      key: 'creatures',
      title: t('category.creatures'),
      icon: Sword,
      summary: t('category.creatures-summary'),
      links: t('category.creatures-links').split(',').map(s => s.trim()),
      href: "/creatures",
    },
    {
      key: 'upgrade',
      title: t('category.upgrade'),
      icon: Sparkles,
      summary: t('category.upgrade-summary'),
      links: t('category.upgrade-links').split(',').map(s => s.trim()),
      href: "/upgrade-system",
    },
    {
      key: 'server',
      title: t('category.server'),
      icon: Trophy,
      summary: t('category.server-summary'),
      links: t('category.server-links').split(',').map(s => s.trim()),
      href: "/server-info",
    },
    {
      key: 'talents',
      title: t('category.talents'),
      icon: Sparkles,
      summary: t('category.talents-summary'),
      links: t('category.talents-links').split(',').map(s => s.trim()),
      href: "/talents",
    },
    {
      key: 'dungeons',
      title: t('category.dungeons'),
      icon: Sword,
      summary: t('category.dungeons-summary'),
      links: t('category.dungeons-links').split(',').map(s => s.trim()),
      href: "/dungeons",
    },
    {
      key: 'quests',
      title: t('category.quests'),
      icon: Wand2,
      summary: t('category.quests-summary'),
      links: t('category.quests-links').split(',').map(s => s.trim()),
      href: "/quests",
    },
    {
      key: 'bosses',
      title: t('category.bosses'),
      icon: Trophy,
      summary: t('category.bosses-summary'),
      links: t('category.bosses-links').split(',').map(s => s.trim()),
      href: "/bosses",
    },
    {
      key: 'raids',
      title: t('category.raids'),
      icon: Trophy,
      summary: t('category.raids-summary'),
      links: t('category.raids-links').split(',').map(s => s.trim()),
      href: "/raids",
    },
    {
      key: 'npcs',
      title: t('category.npcs'),
      icon: Shield,
      summary: t('category.npcs-summary'),
      links: t('category.npcs-links').split(',').map(s => s.trim()),
      href: "/npcs",
    },
    {
      key: 'hunting',
      title: t('category.hunting'),
      icon: Sword,
      summary: t('category.hunting-summary'),
      links: t('category.hunting-links').split(',').map(s => s.trim()),
      href: "/hunting",
    },
    {
      key: 'crafting',
      title: t('category.crafting'),
      icon: Sparkles,
      summary: t('category.crafting-summary'),
      links: t('category.crafting-links').split(',').map(s => s.trim()),
      href: "/crafting",
    },
    {
      key: 'currencies',
      title: t('category.currencies'),
      icon: Trophy,
      summary: t('category.currencies-summary'),
      links: t('category.currencies-links').split(',').map(s => s.trim()),
      href: "/currencies",
    },
    {
      key: 'pvp',
      title: t('category.pvp'),
      icon: Sword,
      summary: t('category.pvp-summary'),
      links: t('category.pvp-links').split(',').map(s => s.trim()),
      href: "/pvp",
    },
    {
      key: 'achievements',
      title: t('category.achievements'),
      icon: Trophy,
      summary: t('category.achievements-summary'),
      links: t('category.achievements-links').split(',').map(s => s.trim()),
      href: "/achievements",
    },
    {
      key: 'guilds',
      title: t('category.guilds'),
      icon: Shield,
      summary: t('category.guilds-summary'),
      links: t('category.guilds-links').split(',').map(s => s.trim()),
      href: "/guilds",
    },
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <FeaturedItems />

      <section id="top" className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">{t('home.brand')}</span>
          <h1>{t('home.hero-title')}</h1>
          <p>{t('home.hero-description')}</p>

          <Link href="/search" className="search-shell" aria-label="Wiki search">
            <Search className="h-5 w-5" />
            <span>{t('home.search-placeholder')}</span>
          </Link>

          <div className="cta-row">
            <a href="#categories" className="button-primary">
              {t('home.browse-categories')}
              <Shield className="h-4 w-4" />
            </a>
            <a
              href="https://evolisca.com"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              {t('home.visit-official')}
            </a>
          </div>
        </div>

        <aside id="start-here" className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">{t('home.start-here')}</span>
            <h2>{t('home.start-title')}</h2>
          </div>

          <div className="start-list">
            <div className="start-item">
              <span className="start-dot" />
              <p>{t('home.start-1')}</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p>{t('home.start-2')}</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p>{t('home.start-3')}</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p>{t('home.start-4')}</p>
            </div>
          </div>

          <div className="mini-note">
            <strong>{t('home.organization')}:</strong>
            <span>{t('home.organization-desc')}</span>
          </div>
        </aside>
      </section>

      <section id="categories" className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('home.core-categories')}</span>
            <h2>{t('home.categories-title')}</h2>
          </div>
          <p>{t('home.categories-desc')}</p>
        </div>

        <div className="category-grid">
          {categoryCards.map(({ key, title, icon: Icon, summary, links, href }) => (
            <Link key={key} href={href}>
              <article className="panel category-card">
                <div className="category-top">
                  <div className="icon-wrap">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="chip">{t('home.category-chip')}</span>
                </div>
                <h3>{title}</h3>
                <p>{summary}</p>
                <ul>
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="panel focus-panel">
          <div>
            <span className="eyebrow">{t('home.organized-eyebrow')}</span>
            <h2>{t('home.organized-title')}</h2>
            <p>{t('home.organized-desc')}</p>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#999' }}>
              {t('home.organized-note')}
            </p>
          </div>

          <div className="focus-points">
            <div>
              <strong>{t('home.real-data')}</strong>
              <p>{t('home.real-data-desc')}</p>
            </div>
            <div>
              <strong>{t('home.searchable')}</strong>
              <p>{t('home.searchable-desc')}</p>
            </div>
            <div>
              <strong>{t('home.filterable')}</strong>
              <p>{t('home.filterable-desc')}</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--line)', gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <img
                src="/images/georgedoors-discord.webp"
                alt="GeorgeDoors Discord Profile"
                style={{ width: '72px', height: '72px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0, border: '1px solid var(--line)' }}
              />
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: '600', letterSpacing: '-0.02em', color: 'var(--text)' }}>{t('home.special-credits')}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {t('home.special-credits-desc')} <a href="https://evolisca-tibia.fandom.com/wiki/Evolisca_Wiki" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-strong)', textDecoration: 'underline' }}>Evolisca Wiki on Fandom</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
