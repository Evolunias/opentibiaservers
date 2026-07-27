import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-with-reviews-server-north-america');
}

export default function RangerSArcaniWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-with-reviews-server-north-america" />;
}
