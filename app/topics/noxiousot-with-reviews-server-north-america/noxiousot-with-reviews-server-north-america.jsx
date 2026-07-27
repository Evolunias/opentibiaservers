import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-north-america');
}

export default function NoxiousotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-north-america" />;
}
