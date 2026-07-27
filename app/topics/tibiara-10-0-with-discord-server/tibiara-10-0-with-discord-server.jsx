import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-with-discord-server');
}

export default function Tibiara100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-with-discord-server" />;
}
