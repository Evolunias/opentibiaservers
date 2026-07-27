import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-evo-server');
}

export default function RookgaardTales86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-evo-server" />;
}
