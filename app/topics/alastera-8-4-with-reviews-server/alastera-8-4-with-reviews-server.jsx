import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-with-reviews-server');
}

export default function Alastera84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-with-reviews-server" />;
}
