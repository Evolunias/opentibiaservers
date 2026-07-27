import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-brazil');
}

export default function OxygenotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-brazil" />;
}
