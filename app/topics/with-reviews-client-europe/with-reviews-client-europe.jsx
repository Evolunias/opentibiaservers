import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-europe');
}

export default function WithReviewsClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-europe" />;
}
