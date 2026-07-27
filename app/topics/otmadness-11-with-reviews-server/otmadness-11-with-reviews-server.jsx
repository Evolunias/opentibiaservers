import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-with-reviews-server');
}

export default function Otmadness11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-with-reviews-server" />;
}
