import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-south-america');
}

export default function RookgaardTalesEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-south-america" />;
}
