import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-market');
}

export default function RangerSArcaniMarketKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-market" />;
}
