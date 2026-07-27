import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-brazil');
}

export default function TibiaraEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-brazil" />;
}
