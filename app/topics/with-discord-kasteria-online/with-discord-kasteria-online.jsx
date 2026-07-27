import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-online');
}

export default function WithDiscordKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-online" />;
}
