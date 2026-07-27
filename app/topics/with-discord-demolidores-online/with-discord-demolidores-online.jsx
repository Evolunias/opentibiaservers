import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-online');
}

export default function WithDiscordDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-online" />;
}
