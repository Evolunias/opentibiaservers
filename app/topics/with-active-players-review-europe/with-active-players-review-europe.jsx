import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-europe');
}

export default function WithActivePlayersReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-europe" />;
}
