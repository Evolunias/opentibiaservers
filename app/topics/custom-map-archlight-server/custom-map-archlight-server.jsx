import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-archlight-server');
}

export default function CustomMapArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-archlight-server" />;
}
