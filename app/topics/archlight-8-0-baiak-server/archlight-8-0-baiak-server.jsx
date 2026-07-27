import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-baiak-server');
}

export default function Archlight80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-baiak-server" />;
}
