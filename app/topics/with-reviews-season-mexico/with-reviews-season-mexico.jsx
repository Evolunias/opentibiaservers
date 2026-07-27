import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-mexico');
}

export default function WithReviewsSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-mexico" />;
}
