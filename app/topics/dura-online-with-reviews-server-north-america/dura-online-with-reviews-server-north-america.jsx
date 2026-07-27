import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-north-america');
}

export default function DuraOnlineWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-north-america" />;
}
