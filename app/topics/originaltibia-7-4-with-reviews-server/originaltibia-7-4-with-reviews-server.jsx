import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-with-reviews-server');
}

export default function Originaltibia74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-with-reviews-server" />;
}
