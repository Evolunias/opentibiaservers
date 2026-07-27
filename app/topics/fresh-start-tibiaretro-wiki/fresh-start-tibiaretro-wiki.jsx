import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-wiki');
}

export default function FreshStartTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-wiki" />;
}
