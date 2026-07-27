import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-poland');
}

export default function ArcaniarlWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-poland" />;
}
