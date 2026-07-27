import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-open-tibia');
}

export default function RealMapMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-open-tibia" />;
}
