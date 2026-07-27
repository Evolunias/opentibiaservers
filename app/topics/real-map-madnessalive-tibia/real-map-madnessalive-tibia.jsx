import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-tibia');
}

export default function RealMapMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-tibia" />;
}
