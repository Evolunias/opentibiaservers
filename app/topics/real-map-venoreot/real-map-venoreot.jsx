import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot');
}

export default function RealMapVenoreotKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot" />;
}
