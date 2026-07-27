import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-with-reviews-server');
}

export default function Alastera12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-with-reviews-server" />;
}
