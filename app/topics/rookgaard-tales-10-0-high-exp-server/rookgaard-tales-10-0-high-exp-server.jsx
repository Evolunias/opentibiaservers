import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-high-exp-server');
}

export default function RookgaardTales100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-high-exp-server" />;
}
