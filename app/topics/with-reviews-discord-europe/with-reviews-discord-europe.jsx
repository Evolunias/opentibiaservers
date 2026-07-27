import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-europe');
}

export default function WithReviewsDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-europe" />;
}
