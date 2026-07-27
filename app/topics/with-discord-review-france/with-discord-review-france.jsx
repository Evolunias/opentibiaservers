import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-france');
}

export default function WithDiscordReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-france" />;
}
