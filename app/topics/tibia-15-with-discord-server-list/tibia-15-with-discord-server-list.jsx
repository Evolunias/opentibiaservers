import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-server-list');
}

export default function Tibia15WithDiscordServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-server-list" />;
}
