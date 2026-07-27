import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-private-server');
}

export default function RealMapArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-private-server" />;
}
