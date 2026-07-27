import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-argentina');
}

export default function ArchlightWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-argentina" />;
}
