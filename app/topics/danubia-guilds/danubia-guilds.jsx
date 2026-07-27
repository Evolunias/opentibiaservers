import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-guilds');
}

export default function DanubiaGuildsKeywordPage() {
  return <StaticKeywordPage slug="danubia-guilds" />;
}
