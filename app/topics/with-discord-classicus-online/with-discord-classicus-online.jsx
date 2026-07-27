import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-online');
}

export default function WithDiscordClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-online" />;
}
