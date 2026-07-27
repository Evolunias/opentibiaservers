import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-sweden');
}

export default function RookgaardTalesEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-sweden" />;
}
