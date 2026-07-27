import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-wiki');
}

export default function PopularTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-wiki" />;
}
