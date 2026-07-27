import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-with-discord-server');
}

export default function Tibiara15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-with-discord-server" />;
}
