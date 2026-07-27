import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-archlight-server');
}

export default function BaiakArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-archlight-server" />;
}
