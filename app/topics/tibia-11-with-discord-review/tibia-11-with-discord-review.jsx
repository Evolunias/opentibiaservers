import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-review');
}

export default function Tibia11WithDiscordReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-review" />;
}
