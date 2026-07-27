import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-guilds');
}

export default function TibiascapeGuildsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-guilds" />;
}
