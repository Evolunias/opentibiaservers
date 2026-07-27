import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-private-server');
}

export default function RealMapArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-private-server" />;
}
