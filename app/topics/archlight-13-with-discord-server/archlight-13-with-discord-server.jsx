import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-with-discord-server');
}

export default function Archlight13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-with-discord-server" />;
}
