import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-poland');
}

export default function WithReviewsClientPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-poland" />;
}
