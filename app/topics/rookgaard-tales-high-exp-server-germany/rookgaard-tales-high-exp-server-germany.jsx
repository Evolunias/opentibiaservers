import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-germany');
}

export default function RookgaardTalesHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-germany" />;
}
