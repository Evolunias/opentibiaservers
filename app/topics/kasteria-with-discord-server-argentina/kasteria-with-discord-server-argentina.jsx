import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-argentina');
}

export default function KasteriaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-argentina" />;
}
