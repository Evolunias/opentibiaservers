import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-ot-server');
}

export default function RealMapVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-ot-server" />;
}
