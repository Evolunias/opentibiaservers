import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-6-evo-server');
}

export default function RookgaardTales76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-6-evo-server" />;
}
