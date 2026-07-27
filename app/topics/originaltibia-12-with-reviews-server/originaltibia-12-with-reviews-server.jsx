import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-with-reviews-server');
}

export default function Originaltibia12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-with-reviews-server" />;
}
