import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-uk');
}

export default function TibiameWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-uk" />;
}
