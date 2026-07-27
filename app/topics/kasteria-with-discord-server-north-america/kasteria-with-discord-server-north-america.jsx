import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-north-america');
}

export default function KasteriaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-north-america" />;
}
