import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-with-reviews-server');
}

export default function Originaltibia86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-with-reviews-server" />;
}
