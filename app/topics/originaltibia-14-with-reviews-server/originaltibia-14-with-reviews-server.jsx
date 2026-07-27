import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-with-reviews-server');
}

export default function Originaltibia14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-with-reviews-server" />;
}
