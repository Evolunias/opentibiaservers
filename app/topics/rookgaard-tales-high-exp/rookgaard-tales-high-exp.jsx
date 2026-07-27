import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp');
}

export default function RookgaardTalesHighExpKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp" />;
}
