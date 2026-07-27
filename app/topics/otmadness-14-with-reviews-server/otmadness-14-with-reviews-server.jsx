import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-with-reviews-server');
}

export default function Otmadness14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-with-reviews-server" />;
}
