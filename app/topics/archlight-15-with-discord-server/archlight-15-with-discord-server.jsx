import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-with-discord-server');
}

export default function Archlight15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-with-discord-server" />;
}
