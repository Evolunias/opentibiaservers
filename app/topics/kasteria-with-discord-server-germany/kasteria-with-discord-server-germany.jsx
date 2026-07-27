import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-germany');
}

export default function KasteriaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-germany" />;
}
