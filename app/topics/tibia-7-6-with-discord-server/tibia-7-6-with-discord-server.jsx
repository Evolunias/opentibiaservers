import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-discord-server');
}

export default function Tibia76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-discord-server" />;
}
