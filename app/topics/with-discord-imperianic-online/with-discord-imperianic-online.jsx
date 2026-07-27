import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-online');
}

export default function WithDiscordImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-online" />;
}
