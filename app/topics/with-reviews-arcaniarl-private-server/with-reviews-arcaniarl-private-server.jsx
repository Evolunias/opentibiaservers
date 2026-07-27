import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-private-server');
}

export default function WithReviewsArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-private-server" />;
}
