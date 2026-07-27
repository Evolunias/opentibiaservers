import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-guilds');
}

export default function VineraGuildsKeywordPage() {
  return <StaticKeywordPage slug="vinera-guilds" />;
}
