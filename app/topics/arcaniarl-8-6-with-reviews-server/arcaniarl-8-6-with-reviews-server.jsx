import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-with-reviews-server');
}

export default function Arcaniarl86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-with-reviews-server" />;
}
