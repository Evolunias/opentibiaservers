import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-servers-brazil');
}

export default function RookgaardTalesEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-servers-brazil" />;
}
