import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-private-server');
}

export default function RealMapYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-private-server" />;
}
