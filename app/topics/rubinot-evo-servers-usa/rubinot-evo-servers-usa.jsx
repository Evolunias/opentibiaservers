import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-servers-usa');
}

export default function RubinotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-servers-usa" />;
}
