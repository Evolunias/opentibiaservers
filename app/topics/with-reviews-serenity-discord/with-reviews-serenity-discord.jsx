import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-discord');
}

export default function WithReviewsSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-discord" />;
}
