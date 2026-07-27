import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-72-with-reviews-server');
}

export default function Arcaniarl772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-72-with-reviews-server" />;
}
