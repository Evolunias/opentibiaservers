import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-evo-server');
}

export default function RookgaardTales71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-evo-server" />;
}
