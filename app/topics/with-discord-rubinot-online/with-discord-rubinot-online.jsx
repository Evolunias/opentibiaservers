import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-online');
}

export default function WithDiscordRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-online" />;
}
