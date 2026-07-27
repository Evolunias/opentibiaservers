import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-guilds');
}

export default function TrimeraGuildsKeywordPage() {
  return <StaticKeywordPage slug="trimera-guilds" />;
}
