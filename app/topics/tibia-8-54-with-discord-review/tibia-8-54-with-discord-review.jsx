import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-discord-review');
}

export default function Tibia854WithDiscordReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-discord-review" />;
}
