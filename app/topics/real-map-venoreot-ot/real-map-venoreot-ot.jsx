import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-ot');
}

export default function RealMapVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-ot" />;
}
