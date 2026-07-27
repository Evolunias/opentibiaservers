import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-season');
}

export default function Tibia96WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-season" />;
}
