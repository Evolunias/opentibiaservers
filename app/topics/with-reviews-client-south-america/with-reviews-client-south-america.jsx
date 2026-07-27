import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-south-america');
}

export default function WithReviewsClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-south-america" />;
}
