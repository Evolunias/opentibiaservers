import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-brazil');
}

export default function ArchlightWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-brazil" />;
}
