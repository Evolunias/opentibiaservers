import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-open-tibia');
}

export default function WithReviewsDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-open-tibia" />;
}
