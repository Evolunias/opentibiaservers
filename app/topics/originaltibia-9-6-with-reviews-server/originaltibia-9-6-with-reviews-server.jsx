import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-with-reviews-server');
}

export default function Originaltibia96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-with-reviews-server" />;
}
