import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-latin-america');
}

export default function ArchlightWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-latin-america" />;
}
