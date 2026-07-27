import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-official');
}

export default function RealMapVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-official" />;
}
