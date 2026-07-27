import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-baiak-server');
}

export default function Archlight76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-baiak-server" />;
}
