import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-guilds');
}

export default function ElderaGuildsKeywordPage() {
  return <StaticKeywordPage slug="eldera-guilds" />;
}
