import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-europe');
}

export default function KasteriaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-europe" />;
}
