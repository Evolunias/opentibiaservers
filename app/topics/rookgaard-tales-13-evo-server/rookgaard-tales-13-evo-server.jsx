import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-evo-server');
}

export default function RookgaardTales13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-evo-server" />;
}
