import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-with-reviews-server');
}

export default function Otmadness86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-with-reviews-server" />;
}
