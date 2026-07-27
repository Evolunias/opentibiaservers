import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-sweden');
}

export default function CanobBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-sweden" />;
}
