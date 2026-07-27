import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-brazil');
}

export default function WithReviewsSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-brazil" />;
}
