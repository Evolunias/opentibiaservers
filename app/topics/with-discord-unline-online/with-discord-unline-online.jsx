import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-online');
}

export default function WithDiscordUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-online" />;
}
