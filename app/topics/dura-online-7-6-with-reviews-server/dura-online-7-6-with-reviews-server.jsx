import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-6-with-reviews-server');
}

export default function DuraOnline76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-6-with-reviews-server" />;
}
