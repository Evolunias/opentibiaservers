import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-with-discord-server');
}

export default function Tibiara14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-with-discord-server" />;
}
