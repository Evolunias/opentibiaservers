import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-tibia');
}

export default function WithReviewsDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-tibia" />;
}
