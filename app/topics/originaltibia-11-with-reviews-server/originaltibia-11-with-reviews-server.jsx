import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-with-reviews-server');
}

export default function Originaltibia11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-with-reviews-server" />;
}
