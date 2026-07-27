import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-germany');
}

export default function WithReviewsSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-germany" />;
}
