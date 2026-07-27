import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-high-exp-server');
}

export default function RookgaardTales11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-high-exp-server" />;
}
