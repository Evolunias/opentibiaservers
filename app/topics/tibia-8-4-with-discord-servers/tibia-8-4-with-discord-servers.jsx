import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-servers');
}

export default function Tibia84WithDiscordServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-servers" />;
}
