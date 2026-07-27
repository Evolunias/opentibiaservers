import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-private-server');
}

export default function RealMapUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-private-server" />;
}
