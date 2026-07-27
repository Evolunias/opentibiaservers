import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-6-evo-servers');
}

export default function RookgaardTales76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-6-evo-servers" />;
}
