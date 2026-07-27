import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-poland');
}

export default function RookgaardTalesHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-poland" />;
}
