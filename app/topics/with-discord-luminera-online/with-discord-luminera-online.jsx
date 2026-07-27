import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-online');
}

export default function WithDiscordLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-online" />;
}
