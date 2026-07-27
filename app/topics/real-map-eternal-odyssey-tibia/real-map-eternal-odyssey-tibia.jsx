import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-tibia');
}

export default function RealMapEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-tibia" />;
}
