import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-canada');
}

export default function WithReviewsDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-canada" />;
}
