import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-discord');
}

export default function WithReviewsKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-discord" />;
}
