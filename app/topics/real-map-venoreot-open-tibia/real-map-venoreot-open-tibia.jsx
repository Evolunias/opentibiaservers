import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-open-tibia');
}

export default function RealMapVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-open-tibia" />;
}
