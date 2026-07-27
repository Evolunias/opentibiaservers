import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-with-reviews-server');
}

export default function DuraOnline71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-with-reviews-server" />;
}
