import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-with-reviews-server');
}

export default function Otmadness80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-with-reviews-server" />;
}
