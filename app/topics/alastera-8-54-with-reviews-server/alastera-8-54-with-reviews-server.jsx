import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-with-reviews-server');
}

export default function Alastera854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-with-reviews-server" />;
}
