import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-with-discord-server');
}

export default function Realera80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-with-discord-server" />;
}
