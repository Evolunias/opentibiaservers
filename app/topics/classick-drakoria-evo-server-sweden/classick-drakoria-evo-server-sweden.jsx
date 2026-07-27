import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-sweden');
}

export default function ClassickDrakoriaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-sweden" />;
}
