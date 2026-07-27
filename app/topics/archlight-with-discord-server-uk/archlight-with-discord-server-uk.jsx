import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-uk');
}

export default function ArchlightWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-uk" />;
}
