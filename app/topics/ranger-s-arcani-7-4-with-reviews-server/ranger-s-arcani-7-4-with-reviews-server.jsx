import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-4-with-reviews-server');
}

export default function RangerSArcani74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-4-with-reviews-server" />;
}
