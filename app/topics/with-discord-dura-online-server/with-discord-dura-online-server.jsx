import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dura-online-server');
}

export default function WithDiscordDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dura-online-server" />;
}
