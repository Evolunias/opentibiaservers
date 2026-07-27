import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-france');
}

export default function TibiameWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-france" />;
}
