import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-reset');
}

export default function RookgaardTalesResetKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-reset" />;
}
