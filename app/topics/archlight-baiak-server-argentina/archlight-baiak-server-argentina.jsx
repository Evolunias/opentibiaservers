import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-argentina');
}

export default function ArchlightBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-argentina" />;
}
