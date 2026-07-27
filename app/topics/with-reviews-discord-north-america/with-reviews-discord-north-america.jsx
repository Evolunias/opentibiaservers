import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-north-america');
}

export default function WithReviewsDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-north-america" />;
}
