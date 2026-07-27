import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-with-reviews-server');
}

export default function DuraOnline14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-with-reviews-server" />;
}
