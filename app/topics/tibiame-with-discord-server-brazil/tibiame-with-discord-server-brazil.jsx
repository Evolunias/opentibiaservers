import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-brazil');
}

export default function TibiameWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-brazil" />;
}
