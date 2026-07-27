import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-with-discord-server');
}

export default function Archlight11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-with-discord-server" />;
}
