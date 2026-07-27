import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-with-reviews-server');
}

export default function DuraOnline13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-with-reviews-server" />;
}
