import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-with-discord-server');
}

export default function DuraOnline71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-with-discord-server" />;
}
