import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-with-reviews-server');
}

export default function Otmadness13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-with-reviews-server" />;
}
