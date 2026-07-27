import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-with-reviews-server');
}

export default function Arcaniarl100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-with-reviews-server" />;
}
