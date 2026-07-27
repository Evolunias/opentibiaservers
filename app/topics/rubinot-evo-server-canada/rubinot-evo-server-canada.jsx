import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-canada');
}

export default function RubinotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-canada" />;
}
