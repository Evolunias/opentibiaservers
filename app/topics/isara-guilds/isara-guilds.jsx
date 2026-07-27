import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-guilds');
}

export default function IsaraGuildsKeywordPage() {
  return <StaticKeywordPage slug="isara-guilds" />;
}
