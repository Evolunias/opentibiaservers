import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-brazil');
}

export default function ArcaniarlWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-brazil" />;
}
