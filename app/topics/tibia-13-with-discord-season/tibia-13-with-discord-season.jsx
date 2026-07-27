import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-season');
}

export default function Tibia13WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-season" />;
}
