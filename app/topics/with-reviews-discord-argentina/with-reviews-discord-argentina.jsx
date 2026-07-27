import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-argentina');
}

export default function WithReviewsDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-argentina" />;
}
