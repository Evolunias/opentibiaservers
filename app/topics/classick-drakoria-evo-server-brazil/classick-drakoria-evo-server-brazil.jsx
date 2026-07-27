import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-brazil');
}

export default function ClassickDrakoriaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-brazil" />;
}
