import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dura-online-client');
}

export default function WithDiscordDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dura-online-client" />;
}
