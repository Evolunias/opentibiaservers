import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-sweden');
}

export default function ThaisotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-sweden" />;
}
