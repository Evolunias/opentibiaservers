import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-germany');
}

export default function AureraGlobalWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-germany" />;
}
