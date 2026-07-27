import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-mexico');
}

export default function RookgaardTalesEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-mexico" />;
}
