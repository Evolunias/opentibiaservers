import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-guilds');
}

export default function ThaisotGuildsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-guilds" />;
}
