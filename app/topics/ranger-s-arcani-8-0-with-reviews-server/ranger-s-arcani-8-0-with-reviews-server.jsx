import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-0-with-reviews-server');
}

export default function RangerSArcani80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-0-with-reviews-server" />;
}
