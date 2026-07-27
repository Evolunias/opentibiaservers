import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-online');
}

export default function WithDiscordAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-online" />;
}
