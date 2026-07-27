import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-baiak-server');
}

export default function Archlight81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-baiak-server" />;
}
