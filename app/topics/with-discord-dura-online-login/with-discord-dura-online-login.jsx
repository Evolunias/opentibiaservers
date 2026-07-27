import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dura-online-login');
}

export default function WithDiscordDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dura-online-login" />;
}
