import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-open-tibia');
}

export default function RealMapTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-open-tibia" />;
}
