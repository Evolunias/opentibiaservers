import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-north-america');
}

export default function TibiameWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-north-america" />;
}
