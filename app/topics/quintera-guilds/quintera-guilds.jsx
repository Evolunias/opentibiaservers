import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-guilds');
}

export default function QuinteraGuildsKeywordPage() {
  return <StaticKeywordPage slug="quintera-guilds" />;
}
