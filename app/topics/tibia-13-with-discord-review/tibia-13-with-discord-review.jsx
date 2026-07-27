import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-review');
}

export default function Tibia13WithDiscordReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-review" />;
}
