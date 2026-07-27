import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta');
}

export default function WithReviewsRealestaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta" />;
}
