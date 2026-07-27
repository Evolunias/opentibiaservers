import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-guilds');
}

export default function CalmeraGuildsKeywordPage() {
  return <StaticKeywordPage slug="calmera-guilds" />;
}
