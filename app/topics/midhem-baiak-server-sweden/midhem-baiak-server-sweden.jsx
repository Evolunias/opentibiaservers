import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-sweden');
}

export default function MidhemBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-sweden" />;
}
