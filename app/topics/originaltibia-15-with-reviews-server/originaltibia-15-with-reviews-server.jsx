import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-with-reviews-server');
}

export default function Originaltibia15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-with-reviews-server" />;
}
