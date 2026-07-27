import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-with-discord-server');
}

export default function Tibiame76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-with-discord-server" />;
}
