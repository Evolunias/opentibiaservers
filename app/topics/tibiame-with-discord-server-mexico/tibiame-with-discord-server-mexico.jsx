import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-mexico');
}

export default function TibiameWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-mexico" />;
}
