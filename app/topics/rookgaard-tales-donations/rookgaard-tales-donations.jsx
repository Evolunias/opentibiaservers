import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-donations');
}

export default function RookgaardTalesDonationsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-donations" />;
}
