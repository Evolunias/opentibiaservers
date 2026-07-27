import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-online');
}

export default function WithDiscordMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-online" />;
}
