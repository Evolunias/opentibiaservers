import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-server');
}

export default function WithReviewsAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-server" />;
}
