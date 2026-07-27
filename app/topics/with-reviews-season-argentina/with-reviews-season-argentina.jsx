import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-argentina');
}

export default function WithReviewsSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-argentina" />;
}
