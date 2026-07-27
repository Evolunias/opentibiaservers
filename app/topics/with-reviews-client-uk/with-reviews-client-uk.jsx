import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-uk');
}

export default function WithReviewsClientUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-uk" />;
}
