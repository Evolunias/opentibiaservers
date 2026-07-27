import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-guilds');
}

export default function HarmoniaGuildsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-guilds" />;
}
