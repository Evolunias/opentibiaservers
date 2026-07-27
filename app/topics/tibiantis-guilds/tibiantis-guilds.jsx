import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-guilds');
}

export default function TibiantisGuildsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-guilds" />;
}
