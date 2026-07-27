import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-guilds');
}

export default function AmeraGuildsKeywordPage() {
  return <StaticKeywordPage slug="amera-guilds" />;
}
