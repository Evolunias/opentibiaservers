import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-with-reviews-server');
}

export default function Arcaniarl14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-with-reviews-server" />;
}
