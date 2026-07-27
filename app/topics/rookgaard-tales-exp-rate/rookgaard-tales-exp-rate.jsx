import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-exp-rate');
}

export default function RookgaardTalesExpRateKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-exp-rate" />;
}
