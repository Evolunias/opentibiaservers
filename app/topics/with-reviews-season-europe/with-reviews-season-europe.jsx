import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-europe');
}

export default function WithReviewsSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-europe" />;
}
