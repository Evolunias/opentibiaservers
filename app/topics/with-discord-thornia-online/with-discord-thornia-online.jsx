import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-online');
}

export default function WithDiscordThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-online" />;
}
