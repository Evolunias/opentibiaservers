import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-wiki');
}

export default function LowrateTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-wiki" />;
}
