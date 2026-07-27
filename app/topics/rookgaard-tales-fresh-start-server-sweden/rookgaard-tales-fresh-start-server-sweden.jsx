import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-sweden');
}

export default function RookgaardTalesFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-sweden" />;
}
