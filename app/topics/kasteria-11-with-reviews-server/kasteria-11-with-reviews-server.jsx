import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-with-reviews-server');
}

export default function Kasteria11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-with-reviews-server" />;
}
