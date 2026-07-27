import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-online');
}

export default function WithDiscordElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-online" />;
}
