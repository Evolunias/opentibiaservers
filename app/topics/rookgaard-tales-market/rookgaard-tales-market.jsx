import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-market');
}

export default function RookgaardTalesMarketKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-market" />;
}
