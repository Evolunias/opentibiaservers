import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-72-with-reviews-server');
}

export default function Otmadness772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-72-with-reviews-server" />;
}
