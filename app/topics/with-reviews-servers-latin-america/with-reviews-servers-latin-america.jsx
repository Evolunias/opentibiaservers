import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-latin-america');
}

export default function WithReviewsServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-latin-america" />;
}
