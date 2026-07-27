import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-official');
}

export default function WithReviewsArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-official" />;
}
