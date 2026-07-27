import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-low-exp-server');
}

export default function RookgaardTales71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-low-exp-server" />;
}
