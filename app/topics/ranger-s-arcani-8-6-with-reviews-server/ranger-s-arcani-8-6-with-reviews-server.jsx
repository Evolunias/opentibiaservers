import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-6-with-reviews-server');
}

export default function RangerSArcani86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-6-with-reviews-server" />;
}
