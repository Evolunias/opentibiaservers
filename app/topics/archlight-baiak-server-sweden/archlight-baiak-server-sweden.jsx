import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-sweden');
}

export default function ArchlightBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-sweden" />;
}
