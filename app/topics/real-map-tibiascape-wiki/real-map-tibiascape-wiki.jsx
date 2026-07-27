import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-wiki');
}

export default function RealMapTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-wiki" />;
}
