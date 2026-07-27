import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-with-discord-server');
}

export default function Archlight14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-with-discord-server" />;
}
