import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-low-exp-server');
}

export default function RookgaardTales14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-low-exp-server" />;
}
