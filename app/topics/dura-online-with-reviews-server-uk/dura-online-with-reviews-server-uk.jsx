import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-uk');
}

export default function DuraOnlineWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-uk" />;
}
