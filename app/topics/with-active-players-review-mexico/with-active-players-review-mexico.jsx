import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-mexico');
}

export default function WithActivePlayersReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-mexico" />;
}
