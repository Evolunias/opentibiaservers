import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-baiak-server');
}

export default function Archlight74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-baiak-server" />;
}
