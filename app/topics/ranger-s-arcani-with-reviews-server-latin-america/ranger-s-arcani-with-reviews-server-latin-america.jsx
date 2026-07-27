import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-with-reviews-server-latin-america');
}

export default function RangerSArcaniWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-with-reviews-server-latin-america" />;
}
