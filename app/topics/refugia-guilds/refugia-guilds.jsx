import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-guilds');
}

export default function RefugiaGuildsKeywordPage() {
  return <StaticKeywordPage slug="refugia-guilds" />;
}
