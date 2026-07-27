import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-france');
}

export default function RookgaardTalesEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-france" />;
}
