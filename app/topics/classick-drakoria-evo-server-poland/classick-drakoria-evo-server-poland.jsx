import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-poland');
}

export default function ClassickDrakoriaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-poland" />;
}
