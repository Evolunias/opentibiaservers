import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-sweden');
}

export default function RookgaardTalesBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-sweden" />;
}
