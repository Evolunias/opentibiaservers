import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-brazil');
}

export default function RookgaardTalesEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-brazil" />;
}
