import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-guilds');
}

export default function TibiaraGuildsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-guilds" />;
}
