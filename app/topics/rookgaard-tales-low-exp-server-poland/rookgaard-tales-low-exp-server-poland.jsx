import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-low-exp-server-poland');
}

export default function RookgaardTalesLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-low-exp-server-poland" />;
}
