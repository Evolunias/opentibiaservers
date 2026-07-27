import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-poland');
}

export default function OxygenotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-poland" />;
}
