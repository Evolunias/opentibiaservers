import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-open-tibia');
}

export default function RealMapEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-open-tibia" />;
}
