import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-servers');
}

export default function Tibia13WithDiscordServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-servers" />;
}
