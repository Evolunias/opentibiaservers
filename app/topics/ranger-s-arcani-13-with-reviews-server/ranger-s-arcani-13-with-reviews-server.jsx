import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-with-reviews-server');
}

export default function RangerSArcani13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-with-reviews-server" />;
}
