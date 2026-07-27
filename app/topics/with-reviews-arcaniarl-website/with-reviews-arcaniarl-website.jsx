import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-website');
}

export default function WithReviewsArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-website" />;
}
