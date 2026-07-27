import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-canada');
}

export default function ArcaniarlWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-canada" />;
}
