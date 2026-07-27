import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-review');
}

export default function Tibia100WithDiscordReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-review" />;
}
