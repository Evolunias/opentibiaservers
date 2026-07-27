import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-guilds');
}

export default function HarmoniaOtGuildsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-guilds" />;
}
