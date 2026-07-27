import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl');
}

export default function RealMapArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl" />;
}
