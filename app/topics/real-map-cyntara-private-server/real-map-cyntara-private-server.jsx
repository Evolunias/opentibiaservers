import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-private-server');
}

export default function RealMapCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-private-server" />;
}
