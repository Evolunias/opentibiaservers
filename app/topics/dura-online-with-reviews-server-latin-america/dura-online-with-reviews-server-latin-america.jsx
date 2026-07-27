import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-latin-america');
}

export default function DuraOnlineWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-latin-america" />;
}
