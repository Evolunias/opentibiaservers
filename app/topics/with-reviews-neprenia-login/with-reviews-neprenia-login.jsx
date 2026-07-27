import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-login');
}

export default function WithReviewsNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-login" />;
}
