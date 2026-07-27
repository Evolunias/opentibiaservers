import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-discord-season');
}

export default function Tibia1098WithDiscordSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-discord-season" />;
}
