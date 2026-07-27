import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-argentina');
}

export default function RookgaardTalesEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-argentina" />;
}
