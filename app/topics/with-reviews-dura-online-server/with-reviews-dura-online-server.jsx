import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-server');
}

export default function WithReviewsDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-server" />;
}
