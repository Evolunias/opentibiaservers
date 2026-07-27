import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-with-reviews-server');
}

export default function Originaltibia76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-with-reviews-server" />;
}
