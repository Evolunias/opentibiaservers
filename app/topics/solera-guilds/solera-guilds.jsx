import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-guilds');
}

export default function SoleraGuildsKeywordPage() {
  return <StaticKeywordPage slug="solera-guilds" />;
}
