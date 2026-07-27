import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-online');
}

export default function WithDiscordEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-online" />;
}
