import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-with-reviews-server');
}

export default function Alastera14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-with-reviews-server" />;
}
