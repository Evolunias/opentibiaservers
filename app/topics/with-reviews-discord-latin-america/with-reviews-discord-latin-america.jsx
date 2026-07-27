import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-latin-america');
}

export default function WithReviewsDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-latin-america" />;
}
