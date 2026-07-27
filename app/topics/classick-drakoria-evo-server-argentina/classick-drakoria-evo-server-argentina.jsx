import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-argentina');
}

export default function ClassickDrakoriaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-argentina" />;
}
