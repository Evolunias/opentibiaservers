import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-client');
}

export default function WithReviewsArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-client" />;
}
