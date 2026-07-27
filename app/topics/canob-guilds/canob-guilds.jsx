import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-guilds');
}

export default function CanobGuildsKeywordPage() {
  return <StaticKeywordPage slug="canob-guilds" />;
}
