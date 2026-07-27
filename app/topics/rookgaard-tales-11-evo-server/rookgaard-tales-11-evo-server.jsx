import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-evo-server');
}

export default function RookgaardTales11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-evo-server" />;
}
