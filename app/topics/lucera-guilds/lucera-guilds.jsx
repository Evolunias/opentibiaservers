import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-guilds');
}

export default function LuceraGuildsKeywordPage() {
  return <StaticKeywordPage slug="lucera-guilds" />;
}
