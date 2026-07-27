import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-online');
}

export default function WithDiscordTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-online" />;
}
