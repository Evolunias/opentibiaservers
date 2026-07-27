import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-poland');
}

export default function RookgaardTalesEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-poland" />;
}
