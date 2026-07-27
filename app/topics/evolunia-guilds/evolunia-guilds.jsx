import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-guilds');
}

export default function EvoluniaGuildsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-guilds" />;
}
