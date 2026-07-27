import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-private-server');
}

export default function WithReviewsOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-private-server" />;
}
