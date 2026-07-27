import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-germany');
}

export default function ArcaniarlWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-germany" />;
}
