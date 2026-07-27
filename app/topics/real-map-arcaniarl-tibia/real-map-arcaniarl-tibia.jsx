import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-tibia');
}

export default function RealMapArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-tibia" />;
}
