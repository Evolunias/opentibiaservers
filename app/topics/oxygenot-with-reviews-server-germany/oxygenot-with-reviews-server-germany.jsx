import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-germany');
}

export default function OxygenotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-germany" />;
}
