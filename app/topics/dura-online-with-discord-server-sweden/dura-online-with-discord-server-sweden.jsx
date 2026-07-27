import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-discord-server-sweden');
}

export default function DuraOnlineWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-discord-server-sweden" />;
}
