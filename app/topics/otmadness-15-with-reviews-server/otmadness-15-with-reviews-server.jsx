import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-with-reviews-server');
}

export default function Otmadness15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-with-reviews-server" />;
}
