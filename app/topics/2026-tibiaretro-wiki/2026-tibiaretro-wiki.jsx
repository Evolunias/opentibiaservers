import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiaretro-wiki');
}

export default function Keyword2026TibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiaretro-wiki" />;
}
