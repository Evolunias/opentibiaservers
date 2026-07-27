import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-online');
}

export default function WithDiscordAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-online" />;
}
