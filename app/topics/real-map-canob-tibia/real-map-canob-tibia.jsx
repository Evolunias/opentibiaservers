import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-tibia');
}

export default function RealMapCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-tibia" />;
}
