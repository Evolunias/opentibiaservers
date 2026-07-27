import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-guilds');
}

export default function NoxiousotGuildsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-guilds" />;
}
