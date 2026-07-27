import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-mexico');
}

export default function RubinotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-mexico" />;
}
