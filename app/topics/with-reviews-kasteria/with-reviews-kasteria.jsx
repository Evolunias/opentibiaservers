import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria');
}

export default function WithReviewsKasteriaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria" />;
}
