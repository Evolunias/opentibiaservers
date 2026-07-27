import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-usa');
}

export default function ArchlightWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-usa" />;
}
