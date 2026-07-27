import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-guilds');
}

export default function ShiveraGuildsKeywordPage() {
  return <StaticKeywordPage slug="shivera-guilds" />;
}
