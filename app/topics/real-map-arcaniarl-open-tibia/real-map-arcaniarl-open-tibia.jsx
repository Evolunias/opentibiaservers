import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-open-tibia');
}

export default function RealMapArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-open-tibia" />;
}
