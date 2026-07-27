import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-online');
}

export default function WithDiscordSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-online" />;
}
