import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-sweden');
}

export default function TibijkaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-sweden" />;
}
