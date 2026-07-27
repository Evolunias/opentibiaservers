import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-south-america');
}

export default function WithReviewsSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-south-america" />;
}
