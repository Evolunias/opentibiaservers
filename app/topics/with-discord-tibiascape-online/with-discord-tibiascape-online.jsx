import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-online');
}

export default function WithDiscordTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-online" />;
}
