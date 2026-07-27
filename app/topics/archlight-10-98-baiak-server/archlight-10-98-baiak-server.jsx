import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-baiak-server');
}

export default function Archlight1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-baiak-server" />;
}
