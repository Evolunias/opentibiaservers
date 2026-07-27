import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-guilds');
}

export default function AureraGlobalGuildsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-guilds" />;
}
