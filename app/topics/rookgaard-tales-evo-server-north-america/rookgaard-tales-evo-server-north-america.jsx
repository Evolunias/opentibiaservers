import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-north-america');
}

export default function RookgaardTalesEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-north-america" />;
}
