import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-poland');
}

export default function KasteriaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-poland" />;
}
