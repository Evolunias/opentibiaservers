import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-servers');
}

export default function Tibia11WithDiscordServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-servers" />;
}
