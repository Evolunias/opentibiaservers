import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-uk');
}

export default function WithReviewsDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-uk" />;
}
