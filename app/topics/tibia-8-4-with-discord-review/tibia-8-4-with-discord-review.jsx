import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-review');
}

export default function Tibia84WithDiscordReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-review" />;
}
