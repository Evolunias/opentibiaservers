import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-with-reviews-server');
}

export default function DuraOnline11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-with-reviews-server" />;
}
