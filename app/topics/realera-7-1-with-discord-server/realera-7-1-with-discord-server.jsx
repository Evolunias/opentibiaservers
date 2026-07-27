import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-with-discord-server');
}

export default function Realera71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-with-discord-server" />;
}
