import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-canada');
}

export default function ClassickDrakoriaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-canada" />;
}
