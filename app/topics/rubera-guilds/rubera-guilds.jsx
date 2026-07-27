import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-guilds');
}

export default function RuberaGuildsKeywordPage() {
  return <StaticKeywordPage slug="rubera-guilds" />;
}
