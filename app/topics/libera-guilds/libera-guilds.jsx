import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-guilds');
}

export default function LiberaGuildsKeywordPage() {
  return <StaticKeywordPage slug="libera-guilds" />;
}
