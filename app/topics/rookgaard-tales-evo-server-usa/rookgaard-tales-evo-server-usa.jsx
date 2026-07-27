import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-usa');
}

export default function RookgaardTalesEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-usa" />;
}
