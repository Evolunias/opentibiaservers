import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-evo-server');
}

export default function RookgaardTales80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-evo-server" />;
}
