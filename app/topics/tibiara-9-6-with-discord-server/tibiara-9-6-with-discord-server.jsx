import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-with-discord-server');
}

export default function Tibiara96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-with-discord-server" />;
}
