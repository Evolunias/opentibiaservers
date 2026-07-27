import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-with-discord-server');
}

export default function Tibiame100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-with-discord-server" />;
}
