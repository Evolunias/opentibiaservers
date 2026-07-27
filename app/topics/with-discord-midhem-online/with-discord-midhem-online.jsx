import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-online');
}

export default function WithDiscordMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-online" />;
}
