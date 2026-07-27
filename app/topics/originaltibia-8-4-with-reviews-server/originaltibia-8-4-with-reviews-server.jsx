import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-with-reviews-server');
}

export default function Originaltibia84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-with-reviews-server" />;
}
