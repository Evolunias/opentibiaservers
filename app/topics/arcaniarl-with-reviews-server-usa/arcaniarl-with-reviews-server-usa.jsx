import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-usa');
}

export default function ArcaniarlWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-usa" />;
}
