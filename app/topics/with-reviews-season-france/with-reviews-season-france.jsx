import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-france');
}

export default function WithReviewsSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-france" />;
}
