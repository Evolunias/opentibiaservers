import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-with-discord-server');
}

export default function Realera100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-with-discord-server" />;
}
