import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-canada');
}

export default function RookgaardTalesEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-canada" />;
}
