import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-reviews');
}

export default function RangerSArcaniReviewsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-reviews" />;
}
