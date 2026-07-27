import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-server-list');
}

export default function Tibia14WithDiscordServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-server-list" />;
}
