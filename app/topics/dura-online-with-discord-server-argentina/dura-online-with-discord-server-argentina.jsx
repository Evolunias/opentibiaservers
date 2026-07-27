import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-discord-server-argentina');
}

export default function DuraOnlineWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-discord-server-argentina" />;
}
