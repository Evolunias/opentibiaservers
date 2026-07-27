import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-with-reviews-server');
}

export default function Blazera96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-with-reviews-server" />;
}
