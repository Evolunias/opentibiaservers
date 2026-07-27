import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-ot-server');
}

export default function RealMapArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-ot-server" />;
}
