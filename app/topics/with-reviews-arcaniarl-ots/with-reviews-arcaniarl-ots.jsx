import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-ots');
}

export default function WithReviewsArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-ots" />;
}
