import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-with-reviews-server');
}

export default function Oxygenot71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-with-reviews-server" />;
}
