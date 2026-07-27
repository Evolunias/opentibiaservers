import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-argentina');
}

export default function TibiameWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-argentina" />;
}
