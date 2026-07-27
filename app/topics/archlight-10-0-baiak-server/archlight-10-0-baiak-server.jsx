import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-baiak-server');
}

export default function Archlight100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-baiak-server" />;
}
