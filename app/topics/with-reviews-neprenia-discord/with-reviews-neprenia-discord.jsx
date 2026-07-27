import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-discord');
}

export default function WithReviewsNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-discord" />;
}
