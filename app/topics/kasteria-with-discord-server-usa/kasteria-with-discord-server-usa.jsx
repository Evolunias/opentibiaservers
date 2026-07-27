import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-usa');
}

export default function KasteriaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-usa" />;
}
