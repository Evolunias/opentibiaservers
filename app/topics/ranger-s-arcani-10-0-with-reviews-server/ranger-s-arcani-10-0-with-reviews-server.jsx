import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-with-reviews-server');
}

export default function RangerSArcani100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-with-reviews-server" />;
}
