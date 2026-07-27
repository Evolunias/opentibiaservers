import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-guilds');
}

export default function ObsidiaGuildsKeywordPage() {
  return <StaticKeywordPage slug="obsidia-guilds" />;
}
