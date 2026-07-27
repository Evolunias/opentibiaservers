import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-sweden');
}

export default function BaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-sweden" />;
}
