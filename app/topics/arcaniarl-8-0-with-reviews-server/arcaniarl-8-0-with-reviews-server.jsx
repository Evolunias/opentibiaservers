import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-with-reviews-server');
}

export default function Arcaniarl80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-with-reviews-server" />;
}
