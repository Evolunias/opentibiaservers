import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-servers-usa');
}

export default function RookgaardTalesEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-servers-usa" />;
}
