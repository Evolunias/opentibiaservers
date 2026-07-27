import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-guilds');
}

export default function ClassickDrakoriaGuildsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-guilds" />;
}
