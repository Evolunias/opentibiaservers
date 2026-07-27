import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-europe');
}

export default function TibiameWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-europe" />;
}
