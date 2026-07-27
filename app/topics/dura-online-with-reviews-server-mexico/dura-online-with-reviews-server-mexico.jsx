import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-mexico');
}

export default function DuraOnlineWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-mexico" />;
}
