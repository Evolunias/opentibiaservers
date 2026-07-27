import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-login');
}

export default function WithReviewsCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-login" />;
}
