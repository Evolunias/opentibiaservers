import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-register');
}

export default function WithReviewsOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-register" />;
}
