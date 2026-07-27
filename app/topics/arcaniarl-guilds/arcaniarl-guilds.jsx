import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-guilds');
}

export default function ArcaniarlGuildsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-guilds" />;
}
