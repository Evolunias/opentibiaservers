import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-with-discord-server');
}

export default function DuraOnline14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-with-discord-server" />;
}
