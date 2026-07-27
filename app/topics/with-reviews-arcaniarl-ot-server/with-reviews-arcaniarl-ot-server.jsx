import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-ot-server');
}

export default function WithReviewsArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-ot-server" />;
}
