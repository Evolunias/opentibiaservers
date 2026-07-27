import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-europe');
}

export default function DuraOnlineWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-europe" />;
}
