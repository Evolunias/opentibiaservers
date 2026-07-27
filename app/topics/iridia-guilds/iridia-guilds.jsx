import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-guilds');
}

export default function IridiaGuildsKeywordPage() {
  return <StaticKeywordPage slug="iridia-guilds" />;
}
