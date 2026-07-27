import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-with-reviews-server');
}

export default function Blazera86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-with-reviews-server" />;
}
