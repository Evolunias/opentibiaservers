import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-with-discord-server');
}

export default function Archlight1098WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-with-discord-server" />;
}
