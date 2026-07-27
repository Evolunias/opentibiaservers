import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-baiak-server');
}

export default function Archlight96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-baiak-server" />;
}
