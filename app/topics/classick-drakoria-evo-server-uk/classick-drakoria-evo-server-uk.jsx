import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-uk');
}

export default function ClassickDrakoriaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-uk" />;
}
