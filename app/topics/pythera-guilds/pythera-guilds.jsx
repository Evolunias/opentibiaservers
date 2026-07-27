import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-guilds');
}

export default function PytheraGuildsKeywordPage() {
  return <StaticKeywordPage slug="pythera-guilds" />;
}
