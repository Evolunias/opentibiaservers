import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-baiak-server');
}

export default function Archlight15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-baiak-server" />;
}
