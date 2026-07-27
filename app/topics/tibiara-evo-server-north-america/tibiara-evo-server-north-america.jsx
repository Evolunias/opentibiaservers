import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-north-america');
}

export default function TibiaraEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-north-america" />;
}
