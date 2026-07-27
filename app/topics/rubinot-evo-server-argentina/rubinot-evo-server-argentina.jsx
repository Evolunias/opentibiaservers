import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-argentina');
}

export default function RubinotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-argentina" />;
}
