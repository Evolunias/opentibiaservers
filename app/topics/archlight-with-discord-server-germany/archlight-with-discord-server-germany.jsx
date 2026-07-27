import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-germany');
}

export default function ArchlightWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-germany" />;
}
