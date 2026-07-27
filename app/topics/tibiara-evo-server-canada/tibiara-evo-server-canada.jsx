import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-canada');
}

export default function TibiaraEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-canada" />;
}
