import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-with-reviews-server');
}

export default function Originaltibia13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-with-reviews-server" />;
}
