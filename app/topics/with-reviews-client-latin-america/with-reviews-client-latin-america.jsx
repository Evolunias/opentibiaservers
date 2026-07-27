import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-latin-america');
}

export default function WithReviewsClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-latin-america" />;
}
