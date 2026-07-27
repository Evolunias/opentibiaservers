import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-discord-server-europe');
}

export default function DuraOnlineWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-discord-server-europe" />;
}
