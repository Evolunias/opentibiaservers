import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-servers-brazil');
}

export default function TibiaraEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-servers-brazil" />;
}
