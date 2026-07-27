import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-discord-server-germany');
}

export default function DuraOnlineWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-discord-server-germany" />;
}
