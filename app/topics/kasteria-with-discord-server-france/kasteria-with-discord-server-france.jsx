import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-france');
}

export default function KasteriaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-france" />;
}
