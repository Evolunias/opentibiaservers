import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-wiki');
}

export default function TopTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-wiki" />;
}
