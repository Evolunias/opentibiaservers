import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-guilds');
}

export default function CalmeraOtGuildsKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-guilds" />;
}
