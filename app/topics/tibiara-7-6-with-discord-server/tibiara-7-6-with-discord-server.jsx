import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-with-discord-server');
}

export default function Tibiara76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-with-discord-server" />;
}
