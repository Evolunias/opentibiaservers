import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-sweden');
}

export default function WithReviewsSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-sweden" />;
}
