import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-website');
}

export default function RealMapVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-website" />;
}
