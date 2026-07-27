import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-guilds');
}

export default function VenoreotGuildsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-guilds" />;
}
