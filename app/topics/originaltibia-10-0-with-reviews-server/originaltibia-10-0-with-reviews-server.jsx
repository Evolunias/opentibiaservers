import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-with-reviews-server');
}

export default function Originaltibia100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-with-reviews-server" />;
}
