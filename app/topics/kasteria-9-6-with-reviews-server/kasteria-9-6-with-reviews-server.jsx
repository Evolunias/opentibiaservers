import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-with-reviews-server');
}

export default function Kasteria96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-with-reviews-server" />;
}
