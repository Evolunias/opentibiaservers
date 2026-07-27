import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-players-online-france');
}

export default function WithReviewsPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-players-online-france" />;
}
