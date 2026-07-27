import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-guilds');
}

export default function NtoStarGuildsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-guilds" />;
}
