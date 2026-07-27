import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-with-reviews-server');
}

export default function Oxygenot100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-with-reviews-server" />;
}
