import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-france');
}

export default function TibiaraEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-france" />;
}
