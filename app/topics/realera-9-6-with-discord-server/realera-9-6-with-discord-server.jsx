import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-with-discord-server');
}

export default function Realera96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-with-discord-server" />;
}
