import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-server-list');
}

export default function Tibia13WithDiscordServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-server-list" />;
}
