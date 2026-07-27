import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-open-tibia');
}

export default function RealMapOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-open-tibia" />;
}
