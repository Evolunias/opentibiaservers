import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-sweden');
}

export default function BaiakServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-sweden" />;
}
