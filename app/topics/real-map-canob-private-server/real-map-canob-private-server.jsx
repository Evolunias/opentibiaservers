import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-private-server');
}

export default function RealMapCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-private-server" />;
}
