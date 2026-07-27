import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-servers');
}

export default function RealMapArcaniarlServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-servers" />;
}
