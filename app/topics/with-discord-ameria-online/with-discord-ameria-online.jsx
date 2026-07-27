import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-online');
}

export default function WithDiscordAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-online" />;
}
