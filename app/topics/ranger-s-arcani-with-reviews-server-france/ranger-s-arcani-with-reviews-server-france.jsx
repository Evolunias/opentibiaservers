import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-with-reviews-server-france');
}

export default function RangerSArcaniWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-with-reviews-server-france" />;
}
