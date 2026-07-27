import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-guilds');
}

export default function ImperianicGuildsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-guilds" />;
}
