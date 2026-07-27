import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-ot');
}

export default function RealMapArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-ot" />;
}
