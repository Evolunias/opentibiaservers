import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-with-reviews-server-europe');
}

export default function RangerSArcaniWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-with-reviews-server-europe" />;
}
