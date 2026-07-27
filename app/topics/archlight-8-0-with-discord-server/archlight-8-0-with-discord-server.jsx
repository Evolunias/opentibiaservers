import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-with-discord-server');
}

export default function Archlight80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-with-discord-server" />;
}
