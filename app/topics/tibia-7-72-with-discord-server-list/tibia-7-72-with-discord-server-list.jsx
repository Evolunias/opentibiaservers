import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-discord-server-list');
}

export default function Tibia772WithDiscordServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-discord-server-list" />;
}
