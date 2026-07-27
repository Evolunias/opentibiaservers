import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-guilds');
}

export default function SerenityGuildsKeywordPage() {
  return <StaticKeywordPage slug="serenity-guilds" />;
}
