import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-tibia');
}

export default function RealMapVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-tibia" />;
}
