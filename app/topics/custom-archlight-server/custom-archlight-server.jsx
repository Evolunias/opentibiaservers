import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-server');
}

export default function CustomArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-server" />;
}
