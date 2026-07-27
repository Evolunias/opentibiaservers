import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-with-reviews-server');
}

export default function Originaltibia71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-with-reviews-server" />;
}
