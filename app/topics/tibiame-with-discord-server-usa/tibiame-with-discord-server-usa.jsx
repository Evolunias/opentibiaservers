import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-usa');
}

export default function TibiameWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-usa" />;
}
