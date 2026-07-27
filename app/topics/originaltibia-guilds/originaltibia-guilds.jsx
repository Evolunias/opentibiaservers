import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-guilds');
}

export default function OriginaltibiaGuildsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-guilds" />;
}
