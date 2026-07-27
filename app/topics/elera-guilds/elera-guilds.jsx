import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-guilds');
}

export default function EleraGuildsKeywordPage() {
  return <StaticKeywordPage slug="elera-guilds" />;
}
