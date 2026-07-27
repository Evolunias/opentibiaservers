import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-reviews');
}

export default function CalmeraOtReviewsKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-reviews" />;
}
