import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-germany');
}

export default function RookgaardTalesEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-germany" />;
}
