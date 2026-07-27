import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-germany');
}

export default function TibiameWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-germany" />;
}
