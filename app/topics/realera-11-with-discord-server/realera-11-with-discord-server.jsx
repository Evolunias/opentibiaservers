import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-with-discord-server');
}

export default function Realera11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-with-discord-server" />;
}
