import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-season');
}

export default function Tibia84WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-season" />;
}
