import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-guilds');
}

export default function TenebraGuildsKeywordPage() {
  return <StaticKeywordPage slug="tenebra-guilds" />;
}
