import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-servers-brazil');
}

export default function RubinotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-servers-brazil" />;
}
