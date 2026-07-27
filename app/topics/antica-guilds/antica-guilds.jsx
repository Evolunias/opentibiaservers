import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-guilds');
}

export default function AnticaGuildsKeywordPage() {
  return <StaticKeywordPage slug="antica-guilds" />;
}
