import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-guilds');
}

export default function NostaltherGuildsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-guilds" />;
}
