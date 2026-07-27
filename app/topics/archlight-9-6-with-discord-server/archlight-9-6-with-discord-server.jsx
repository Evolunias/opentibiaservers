import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-with-discord-server');
}

export default function Archlight96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-with-discord-server" />;
}
