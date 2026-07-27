import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-tibia');
}

export default function RealMapTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-tibia" />;
}
