import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-guilds');
}

export default function ClassicusGuildsKeywordPage() {
  return <StaticKeywordPage slug="classicus-guilds" />;
}
