import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-with-reviews-server');
}

export default function Blazera80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-with-reviews-server" />;
}
