import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-guilds');
}

export default function JameraGuildsKeywordPage() {
  return <StaticKeywordPage slug="jamera-guilds" />;
}
