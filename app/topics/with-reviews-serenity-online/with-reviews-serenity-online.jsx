import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-online');
}

export default function WithReviewsSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-online" />;
}
