import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-servers');
}

export default function RealMapArchlightServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-servers" />;
}
