import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global');
}

export default function WithReviewsAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global" />;
}
