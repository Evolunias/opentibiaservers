import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-online');
}

export default function WithReviewsMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-online" />;
}
