import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-discord-season');
}

export default function Tibia772WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-discord-season" />;
}
