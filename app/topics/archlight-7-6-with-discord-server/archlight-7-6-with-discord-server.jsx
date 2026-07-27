import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-with-discord-server');
}

export default function Archlight76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-with-discord-server" />;
}
