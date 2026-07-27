import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-poland');
}

export default function AureraGlobalWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-poland" />;
}
