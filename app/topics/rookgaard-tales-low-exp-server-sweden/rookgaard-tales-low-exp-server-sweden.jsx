import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-low-exp-server-sweden');
}

export default function RookgaardTalesLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-low-exp-server-sweden" />;
}
