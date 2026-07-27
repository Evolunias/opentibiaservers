import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-guilds');
}

export default function MiracleGuildsKeywordPage() {
  return <StaticKeywordPage slug="miracle-guilds" />;
}
