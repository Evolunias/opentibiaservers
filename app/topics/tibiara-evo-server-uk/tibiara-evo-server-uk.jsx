import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-uk');
}

export default function TibiaraEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-uk" />;
}
