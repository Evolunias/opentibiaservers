import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-germany');
}

export default function ClassickDrakoriaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-germany" />;
}
