import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-servers');
}

export default function Tibia12WithDiscordServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-servers" />;
}
