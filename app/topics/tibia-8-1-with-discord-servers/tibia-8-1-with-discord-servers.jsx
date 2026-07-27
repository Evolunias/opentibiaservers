import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-servers');
}

export default function Tibia81WithDiscordServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-servers" />;
}
