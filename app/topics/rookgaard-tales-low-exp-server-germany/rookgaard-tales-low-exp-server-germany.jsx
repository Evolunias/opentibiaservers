import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-low-exp-server-germany');
}

export default function RookgaardTalesLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-low-exp-server-germany" />;
}
