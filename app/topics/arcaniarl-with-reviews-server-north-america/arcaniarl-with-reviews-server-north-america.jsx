import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-north-america');
}

export default function ArcaniarlWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-north-america" />;
}
