import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-with-reviews-server');
}

export default function Arcaniarl12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-with-reviews-server" />;
}
