import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-germany');
}

export default function WithReviewsClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-germany" />;
}
