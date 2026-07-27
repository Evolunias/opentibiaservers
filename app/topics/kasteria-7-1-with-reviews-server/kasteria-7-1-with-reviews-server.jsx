import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-with-reviews-server');
}

export default function Kasteria71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-with-reviews-server" />;
}
