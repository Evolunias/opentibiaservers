import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-online');
}

export default function WithDiscordCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-online" />;
}
