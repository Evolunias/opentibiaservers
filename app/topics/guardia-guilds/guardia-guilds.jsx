import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-guilds');
}

export default function GuardiaGuildsKeywordPage() {
  return <StaticKeywordPage slug="guardia-guilds" />;
}
