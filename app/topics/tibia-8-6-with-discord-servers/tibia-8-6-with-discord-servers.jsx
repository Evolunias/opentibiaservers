import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-discord-servers');
}

export default function Tibia86WithDiscordServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-discord-servers" />;
}
