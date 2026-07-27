import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-season');
}

export default function Tibia15WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-season" />;
}
