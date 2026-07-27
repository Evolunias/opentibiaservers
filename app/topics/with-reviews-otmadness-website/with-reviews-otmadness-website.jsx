import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-website');
}

export default function WithReviewsOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-website" />;
}
