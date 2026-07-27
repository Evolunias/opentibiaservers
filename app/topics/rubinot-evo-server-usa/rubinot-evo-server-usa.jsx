import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-usa');
}

export default function RubinotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-usa" />;
}
