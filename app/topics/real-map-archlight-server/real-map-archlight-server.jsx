import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-server');
}

export default function RealMapArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-server" />;
}
