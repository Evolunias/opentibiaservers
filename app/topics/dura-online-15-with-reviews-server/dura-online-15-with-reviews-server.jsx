import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-with-reviews-server');
}

export default function DuraOnline15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-with-reviews-server" />;
}
