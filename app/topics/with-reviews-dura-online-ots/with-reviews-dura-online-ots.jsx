import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-ots');
}

export default function WithReviewsDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-ots" />;
}
