import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-with-reviews-server');
}

export default function Arcaniarl96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-with-reviews-server" />;
}
