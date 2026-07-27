import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-open-tibia');
}

export default function RealMapCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-open-tibia" />;
}
