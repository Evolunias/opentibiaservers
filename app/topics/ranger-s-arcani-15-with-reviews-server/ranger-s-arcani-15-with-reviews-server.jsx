import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-with-reviews-server');
}

export default function RangerSArcani15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-with-reviews-server" />;
}
