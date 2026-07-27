import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-europe');
}

export default function ArcaniarlWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-europe" />;
}
