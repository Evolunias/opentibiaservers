import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-usa');
}

export default function ClassickDrakoriaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-usa" />;
}
