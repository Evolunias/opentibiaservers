import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-brazil');
}

export default function KasteriaWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-brazil" />;
}
