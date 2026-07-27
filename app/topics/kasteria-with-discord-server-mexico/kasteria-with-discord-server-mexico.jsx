import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-mexico');
}

export default function KasteriaWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-mexico" />;
}
