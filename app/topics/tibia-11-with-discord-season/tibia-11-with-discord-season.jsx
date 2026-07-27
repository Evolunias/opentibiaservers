import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-season');
}

export default function Tibia11WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-season" />;
}
