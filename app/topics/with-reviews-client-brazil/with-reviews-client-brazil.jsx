import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-brazil');
}

export default function WithReviewsClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-brazil" />;
}
