import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-online');
}

export default function WithDiscordMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-online" />;
}
