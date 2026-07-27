import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-evo-server');
}

export default function RookgaardTales81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-evo-server" />;
}
