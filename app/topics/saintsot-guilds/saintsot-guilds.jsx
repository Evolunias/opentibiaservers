import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-guilds');
}

export default function SaintsotGuildsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-guilds" />;
}
