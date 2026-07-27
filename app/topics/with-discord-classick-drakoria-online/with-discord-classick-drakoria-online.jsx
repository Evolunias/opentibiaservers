import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-online');
}

export default function WithDiscordClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-online" />;
}
