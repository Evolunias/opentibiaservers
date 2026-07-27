import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-server');
}

export default function WithReviewsArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-server" />;
}
