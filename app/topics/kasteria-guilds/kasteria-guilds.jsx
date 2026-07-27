import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-guilds');
}

export default function KasteriaGuildsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-guilds" />;
}
