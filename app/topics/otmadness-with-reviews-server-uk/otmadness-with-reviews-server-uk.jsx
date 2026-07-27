import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-uk');
}

export default function OtmadnessWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-uk" />;
}
