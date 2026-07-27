import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-online');
}

export default function WithDiscordOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-online" />;
}
