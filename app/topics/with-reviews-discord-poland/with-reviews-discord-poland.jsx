import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-poland');
}

export default function WithReviewsDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-poland" />;
}
