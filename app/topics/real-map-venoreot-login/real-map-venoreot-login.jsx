import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-login');
}

export default function RealMapVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-login" />;
}
