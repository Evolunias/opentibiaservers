import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-review');
}

export default function Tibia81WithDiscordReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-review" />;
}
