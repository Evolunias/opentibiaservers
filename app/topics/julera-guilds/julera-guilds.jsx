import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-guilds');
}

export default function JuleraGuildsKeywordPage() {
  return <StaticKeywordPage slug="julera-guilds" />;
}
