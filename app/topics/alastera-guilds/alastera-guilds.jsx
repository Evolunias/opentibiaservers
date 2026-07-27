import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-guilds');
}

export default function AlasteraGuildsKeywordPage() {
  return <StaticKeywordPage slug="alastera-guilds" />;
}
