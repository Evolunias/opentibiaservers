import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-4-with-reviews-server');
}

export default function DuraOnline84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-4-with-reviews-server" />;
}
