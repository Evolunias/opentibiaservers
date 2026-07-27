import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-reviews');
}

export default function OpenTibiaServerListReviewsKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-reviews" />;
}
