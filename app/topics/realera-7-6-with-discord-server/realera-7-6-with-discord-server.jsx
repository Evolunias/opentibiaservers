import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-with-discord-server');
}

export default function Realera76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-with-discord-server" />;
}
