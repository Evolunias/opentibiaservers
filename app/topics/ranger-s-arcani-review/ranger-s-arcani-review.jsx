import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-review');
}

export default function RangerSArcaniReviewKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-review" />;
}
