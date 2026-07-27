import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-evo-server');
}

export default function RookgaardTales12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-evo-server" />;
}
