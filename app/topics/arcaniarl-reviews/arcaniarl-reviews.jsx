import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-reviews');
}

export default function ArcaniarlReviewsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-reviews" />;
}
