import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-france');
}

export default function WithReviewsDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-france" />;
}
