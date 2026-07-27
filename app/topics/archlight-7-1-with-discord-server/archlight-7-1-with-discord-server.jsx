import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-with-discord-server');
}

export default function Archlight71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-with-discord-server" />;
}
