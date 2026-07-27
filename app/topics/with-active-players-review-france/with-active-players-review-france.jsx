import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-france');
}

export default function WithActivePlayersReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-france" />;
}
