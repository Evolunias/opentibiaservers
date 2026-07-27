import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-ots');
}

export default function RealMapVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-ots" />;
}
