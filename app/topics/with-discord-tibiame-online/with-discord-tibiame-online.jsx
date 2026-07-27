import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-online');
}

export default function WithDiscordTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-online" />;
}
