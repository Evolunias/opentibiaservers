import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-with-discord-server');
}

export default function Realera74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-with-discord-server" />;
}
