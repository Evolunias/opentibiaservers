import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-guilds');
}

export default function AsteraGuildsKeywordPage() {
  return <StaticKeywordPage slug="astera-guilds" />;
}
