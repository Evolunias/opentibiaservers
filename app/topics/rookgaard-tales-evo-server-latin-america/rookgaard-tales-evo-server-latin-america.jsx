import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-latin-america');
}

export default function RookgaardTalesEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-latin-america" />;
}
