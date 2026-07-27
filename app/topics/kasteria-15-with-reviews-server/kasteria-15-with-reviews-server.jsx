import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-with-reviews-server');
}

export default function Kasteria15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-with-reviews-server" />;
}
