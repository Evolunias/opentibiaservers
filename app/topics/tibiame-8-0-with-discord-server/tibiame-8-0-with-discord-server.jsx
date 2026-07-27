import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-with-discord-server');
}

export default function Tibiame80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-with-discord-server" />;
}
