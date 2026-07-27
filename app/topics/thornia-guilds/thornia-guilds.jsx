import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-guilds');
}

export default function ThorniaGuildsKeywordPage() {
  return <StaticKeywordPage slug="thornia-guilds" />;
}
