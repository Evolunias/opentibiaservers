import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-evo-servers');
}

export default function RookgaardTales13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-evo-servers" />;
}
