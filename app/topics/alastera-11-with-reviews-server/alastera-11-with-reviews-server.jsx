import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-with-reviews-server');
}

export default function Alastera11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-with-reviews-server" />;
}
