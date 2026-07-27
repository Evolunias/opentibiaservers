import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-with-reviews-server');
}

export default function Blazera84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-with-reviews-server" />;
}
