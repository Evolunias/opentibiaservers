import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-discord-server-uk');
}

export default function DuraOnlineWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-discord-server-uk" />;
}
