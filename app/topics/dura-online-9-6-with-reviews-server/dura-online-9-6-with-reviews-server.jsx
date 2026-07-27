import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-with-reviews-server');
}

export default function DuraOnline96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-with-reviews-server" />;
}
