import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-with-reviews-server');
}

export default function RangerSArcani12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-with-reviews-server" />;
}
