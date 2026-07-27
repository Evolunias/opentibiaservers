import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-uk');
}

export default function OriginaltibiaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-uk" />;
}
