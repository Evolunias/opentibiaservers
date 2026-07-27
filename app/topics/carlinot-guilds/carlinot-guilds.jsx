import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-guilds');
}

export default function CarlinotGuildsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-guilds" />;
}
