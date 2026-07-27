import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-guilds');
}

export default function TitaniaGuildsKeywordPage() {
  return <StaticKeywordPage slug="titania-guilds" />;
}
