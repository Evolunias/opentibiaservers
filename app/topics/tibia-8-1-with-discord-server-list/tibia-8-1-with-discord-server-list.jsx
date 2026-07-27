import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-server-list');
}

export default function Tibia81WithDiscordServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-server-list" />;
}
