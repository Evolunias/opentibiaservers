import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-baiak-server');
}

export default function Archlight14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-baiak-server" />;
}
