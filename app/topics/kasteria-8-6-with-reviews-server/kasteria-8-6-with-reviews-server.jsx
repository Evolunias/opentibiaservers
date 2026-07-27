import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-with-reviews-server');
}

export default function Kasteria86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-with-reviews-server" />;
}
