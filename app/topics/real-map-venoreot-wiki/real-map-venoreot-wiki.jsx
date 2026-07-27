import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-wiki');
}

export default function RealMapVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-wiki" />;
}
