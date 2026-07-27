import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-discord-review');
}

export default function Tibia74WithDiscordReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-discord-review" />;
}
