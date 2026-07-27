import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-with-reviews-server');
}

export default function Arcaniarl13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-with-reviews-server" />;
}
