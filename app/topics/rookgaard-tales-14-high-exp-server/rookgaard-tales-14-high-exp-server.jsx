import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-high-exp-server');
}

export default function RookgaardTales14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-high-exp-server" />;
}
