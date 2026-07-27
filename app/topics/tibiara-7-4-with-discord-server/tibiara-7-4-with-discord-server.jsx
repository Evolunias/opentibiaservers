import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-with-discord-server');
}

export default function Tibiara74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-with-discord-server" />;
}
