import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-with-reviews-server');
}

export default function Otmadness96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-with-reviews-server" />;
}
