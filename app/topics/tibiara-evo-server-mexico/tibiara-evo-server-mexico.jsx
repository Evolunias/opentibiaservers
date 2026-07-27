import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-mexico');
}

export default function TibiaraEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-mexico" />;
}
