import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-with-reviews-server');
}

export default function Otmadness71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-with-reviews-server" />;
}
