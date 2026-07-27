import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-north-america');
}

export default function AureraGlobalWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-north-america" />;
}
