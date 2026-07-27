import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-with-reviews-server');
}

export default function Alastera100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-with-reviews-server" />;
}
