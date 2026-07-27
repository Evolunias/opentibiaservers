import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-servers-usa');
}

export default function MiracleEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-servers-usa" />;
}
