import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-with-reviews-server');
}

export default function Oxygenot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-with-reviews-server" />;
}
