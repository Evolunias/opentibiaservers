import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-with-reviews-server');
}

export default function Otmadness12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-with-reviews-server" />;
}
