import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-europe');
}

export default function RookgaardTalesHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-europe" />;
}
