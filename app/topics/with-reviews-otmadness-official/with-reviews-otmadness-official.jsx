import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-official');
}

export default function WithReviewsOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-official" />;
}
