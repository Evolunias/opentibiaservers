import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-uk');
}

export default function RookgaardTalesEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-uk" />;
}
