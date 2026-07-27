import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-with-reviews-server');
}

export default function Kasteria14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-with-reviews-server" />;
}
