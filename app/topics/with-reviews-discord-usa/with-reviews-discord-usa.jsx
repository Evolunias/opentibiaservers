import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-usa');
}

export default function WithReviewsDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-usa" />;
}
