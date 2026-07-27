import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-mexico');
}

export default function WithReviewsDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-mexico" />;
}
