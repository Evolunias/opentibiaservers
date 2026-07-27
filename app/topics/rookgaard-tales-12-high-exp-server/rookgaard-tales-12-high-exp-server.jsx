import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-high-exp-server');
}

export default function RookgaardTales12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-high-exp-server" />;
}
