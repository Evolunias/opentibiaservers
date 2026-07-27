import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-with-reviews-server');
}

export default function Alastera772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-with-reviews-server" />;
}
