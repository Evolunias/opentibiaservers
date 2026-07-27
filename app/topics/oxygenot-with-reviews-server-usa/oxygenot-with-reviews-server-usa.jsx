import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-usa');
}

export default function OxygenotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-usa" />;
}
