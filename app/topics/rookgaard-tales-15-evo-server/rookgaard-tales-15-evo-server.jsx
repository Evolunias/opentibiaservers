import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-evo-server');
}

export default function RookgaardTales15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-evo-server" />;
}
