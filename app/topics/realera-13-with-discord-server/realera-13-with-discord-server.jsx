import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-with-discord-server');
}

export default function Realera13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-with-discord-server" />;
}
