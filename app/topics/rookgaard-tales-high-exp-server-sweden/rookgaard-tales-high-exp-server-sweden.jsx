import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-sweden');
}

export default function RookgaardTalesHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-sweden" />;
}
