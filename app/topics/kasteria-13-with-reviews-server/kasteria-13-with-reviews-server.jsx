import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-with-reviews-server');
}

export default function Kasteria13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-with-reviews-server" />;
}
