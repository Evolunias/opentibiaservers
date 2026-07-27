import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-with-reviews-server');
}

export default function Kasteria84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-with-reviews-server" />;
}
