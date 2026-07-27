import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-online');
}

export default function WithDiscordArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-online" />;
}
