import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-wiki');
}

export default function BestTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-wiki" />;
}
