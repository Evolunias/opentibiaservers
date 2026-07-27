import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-guilds');
}

export default function MeneraGuildsKeywordPage() {
  return <StaticKeywordPage slug="menera-guilds" />;
}
