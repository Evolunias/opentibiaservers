import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-with-reviews-server');
}

export default function Oxygenot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-with-reviews-server" />;
}
