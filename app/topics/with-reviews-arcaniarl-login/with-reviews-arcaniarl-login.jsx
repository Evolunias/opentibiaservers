import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-login');
}

export default function WithReviewsArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-login" />;
}
