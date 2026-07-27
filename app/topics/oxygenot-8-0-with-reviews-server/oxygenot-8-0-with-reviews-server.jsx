import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-with-reviews-server');
}

export default function Oxygenot80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-with-reviews-server" />;
}
