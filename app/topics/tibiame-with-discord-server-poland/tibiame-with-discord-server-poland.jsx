import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-poland');
}

export default function TibiameWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-poland" />;
}
