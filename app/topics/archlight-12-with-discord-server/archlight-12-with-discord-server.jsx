import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-with-discord-server');
}

export default function Archlight12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-with-discord-server" />;
}
