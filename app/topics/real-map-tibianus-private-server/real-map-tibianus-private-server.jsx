import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-private-server');
}

export default function RealMapTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-private-server" />;
}
