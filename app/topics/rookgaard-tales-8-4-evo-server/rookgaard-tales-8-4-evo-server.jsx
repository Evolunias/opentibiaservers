import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-evo-server');
}

export default function RookgaardTales84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-evo-server" />;
}
