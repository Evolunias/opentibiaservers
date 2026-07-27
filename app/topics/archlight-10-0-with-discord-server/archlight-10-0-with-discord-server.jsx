import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-with-discord-server');
}

export default function Archlight100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-with-discord-server" />;
}
