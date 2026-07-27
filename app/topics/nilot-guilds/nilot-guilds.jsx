import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-guilds');
}

export default function NilotGuildsKeywordPage() {
  return <StaticKeywordPage slug="nilot-guilds" />;
}
