import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-client');
}

export default function WithReviewsDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-client" />;
}
