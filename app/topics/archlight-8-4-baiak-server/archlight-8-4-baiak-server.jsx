import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-baiak-server');
}

export default function Archlight84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-baiak-server" />;
}
