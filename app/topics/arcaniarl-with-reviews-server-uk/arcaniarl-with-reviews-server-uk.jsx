import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-uk');
}

export default function ArcaniarlWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-uk" />;
}
