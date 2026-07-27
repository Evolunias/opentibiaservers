import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-client');
}

export default function RealMapArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-client" />;
}
