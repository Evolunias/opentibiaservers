import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-with-reviews-server');
}

export default function Alastera96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-with-reviews-server" />;
}
