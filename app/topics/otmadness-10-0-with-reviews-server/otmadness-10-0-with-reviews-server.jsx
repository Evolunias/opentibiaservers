import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-with-reviews-server');
}

export default function Otmadness100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-with-reviews-server" />;
}
