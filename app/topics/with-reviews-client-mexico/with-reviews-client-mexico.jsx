import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-mexico');
}

export default function WithReviewsClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-mexico" />;
}
