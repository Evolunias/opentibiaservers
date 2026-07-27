import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-server');
}

export default function RealMapArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-server" />;
}
