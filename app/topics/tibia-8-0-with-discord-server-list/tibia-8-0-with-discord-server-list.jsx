import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-discord-server-list');
}

export default function Tibia80WithDiscordServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-discord-server-list" />;
}
