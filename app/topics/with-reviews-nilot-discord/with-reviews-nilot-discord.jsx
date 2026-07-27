import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-discord');
}

export default function WithReviewsNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-discord" />;
}
