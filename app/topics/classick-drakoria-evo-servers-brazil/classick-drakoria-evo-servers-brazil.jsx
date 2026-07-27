import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-servers-brazil');
}

export default function ClassickDrakoriaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-servers-brazil" />;
}
