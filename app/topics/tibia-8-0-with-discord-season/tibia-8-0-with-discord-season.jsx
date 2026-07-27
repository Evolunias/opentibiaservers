import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-discord-season');
}

export default function Tibia80WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-discord-season" />;
}
