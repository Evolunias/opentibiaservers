import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-with-reviews-server');
}

export default function Alastera80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-with-reviews-server" />;
}
