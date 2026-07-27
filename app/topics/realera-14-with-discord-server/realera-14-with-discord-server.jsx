import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-with-discord-server');
}

export default function Realera14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-with-discord-server" />;
}
