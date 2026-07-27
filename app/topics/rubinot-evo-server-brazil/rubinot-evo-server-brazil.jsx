import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-brazil');
}

export default function RubinotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-brazil" />;
}
