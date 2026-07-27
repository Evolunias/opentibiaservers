import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-guilds');
}

export default function RealestaGuildsKeywordPage() {
  return <StaticKeywordPage slug="realesta-guilds" />;
}
