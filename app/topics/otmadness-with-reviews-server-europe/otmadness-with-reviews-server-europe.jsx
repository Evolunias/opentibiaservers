import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-europe');
}

export default function OtmadnessWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-europe" />;
}
