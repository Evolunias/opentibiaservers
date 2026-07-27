import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-usa');
}

export default function ArchlightBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-usa" />;
}
