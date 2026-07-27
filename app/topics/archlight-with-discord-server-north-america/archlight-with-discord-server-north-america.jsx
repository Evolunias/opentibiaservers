import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-north-america');
}

export default function ArchlightWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-north-america" />;
}
