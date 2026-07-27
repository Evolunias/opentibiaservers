import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-with-reviews-server');
}

export default function Alastera13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-with-reviews-server" />;
}
