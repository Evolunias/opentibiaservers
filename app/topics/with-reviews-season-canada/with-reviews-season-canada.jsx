import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-canada');
}

export default function WithReviewsSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-canada" />;
}
