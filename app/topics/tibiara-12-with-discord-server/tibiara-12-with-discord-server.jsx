import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-with-discord-server');
}

export default function Tibiara12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-with-discord-server" />;
}
