import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-online');
}

export default function WithDiscordArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-online" />;
}
