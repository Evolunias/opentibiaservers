import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-online');
}

export default function WithReviewsArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-online" />;
}
