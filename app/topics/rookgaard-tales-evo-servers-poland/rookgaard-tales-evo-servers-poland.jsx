import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-servers-poland');
}

export default function RookgaardTalesEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-servers-poland" />;
}
