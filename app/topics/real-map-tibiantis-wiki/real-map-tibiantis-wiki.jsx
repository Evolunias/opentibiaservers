import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-wiki');
}

export default function RealMapTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-wiki" />;
}
