import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-mexico');
}

export default function ArchlightWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-mexico" />;
}
