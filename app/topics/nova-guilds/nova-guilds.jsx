import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-guilds');
}

export default function NovaGuildsKeywordPage() {
  return <StaticKeywordPage slug="nova-guilds" />;
}
