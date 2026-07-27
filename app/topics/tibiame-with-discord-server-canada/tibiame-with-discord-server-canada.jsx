import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-canada');
}

export default function TibiameWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-canada" />;
}
