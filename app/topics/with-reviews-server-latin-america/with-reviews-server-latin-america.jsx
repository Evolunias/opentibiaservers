import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-latin-america');
}

export default function WithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-latin-america" />;
}
