import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-server-list');
}

export default function Tibia11WithDiscordServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-server-list" />;
}
