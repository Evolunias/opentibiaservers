import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-high-exp-server');
}

export default function RookgaardTales13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-high-exp-server" />;
}
