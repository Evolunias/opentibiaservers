import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-with-reviews-server');
}

export default function Alastera15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-with-reviews-server" />;
}
