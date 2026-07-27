import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-wiki');
}

export default function CurrentTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-wiki" />;
}
