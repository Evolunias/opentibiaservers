import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-with-reviews-server-sweden');
}

export default function RangerSArcaniWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-with-reviews-server-sweden" />;
}
