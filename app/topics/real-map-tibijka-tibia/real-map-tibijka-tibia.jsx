import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-tibia');
}

export default function RealMapTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-tibia" />;
}
