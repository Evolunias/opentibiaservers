import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-login');
}

export default function WithReviewsAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-login" />;
}
