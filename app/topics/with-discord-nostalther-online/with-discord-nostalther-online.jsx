import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-online');
}

export default function WithDiscordNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-online" />;
}
