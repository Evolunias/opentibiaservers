import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-guilds');
}

export default function MidhemGuildsKeywordPage() {
  return <StaticKeywordPage slug="midhem-guilds" />;
}
