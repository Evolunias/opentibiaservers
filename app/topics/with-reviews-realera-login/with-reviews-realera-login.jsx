import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-login');
}

export default function WithReviewsRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-login" />;
}
