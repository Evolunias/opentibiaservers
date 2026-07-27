import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-with-discord-server');
}

export default function Tibiame12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-with-discord-server" />;
}
