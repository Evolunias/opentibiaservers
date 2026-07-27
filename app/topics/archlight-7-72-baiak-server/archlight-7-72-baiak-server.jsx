import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-baiak-server');
}

export default function Archlight772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-baiak-server" />;
}
