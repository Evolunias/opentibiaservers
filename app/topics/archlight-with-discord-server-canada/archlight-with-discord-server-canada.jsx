import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-canada');
}

export default function ArchlightWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-canada" />;
}
